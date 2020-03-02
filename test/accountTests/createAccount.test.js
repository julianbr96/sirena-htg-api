const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validAccount = require('../resources/testAccount.json')
const Account = require('../../src/models/account')
const SECRET = require('../../src/config/global.json').secret

describe('Testing CREATE NEW ACCOUNT', () => {
  beforeAll(async () => {
    await deleteTestAccount()
  })
  afterAll(async () => {
    await deleteTestAccount()
    await mongoose.disconnect()
  })
  it('POST /api/private/accounts should return status 201', async done => {
    const response = await supertest(app.callback())
      .post('/api/private/accounts')
      .set('authorization', SECRET)
      .send({ account: validAccount })
    expect(response.status).toBe(201)
    expect(response.body.status).toBe('success')
    done()
  })
  it('POST /api/private/accounts without token should return status 401', async done => {
    const response = await supertest(app.callback())
      .post('/api/private/accounts')
      .send({ account: validAccount })
    expect(response.status).toBe(401)
    done()
  })
})

async function deleteTestAccount () {
  await Account.deleteOne({ name: validAccount.name }, error => {
    if (error) {
      throw Error(error)
    }
  })
}
