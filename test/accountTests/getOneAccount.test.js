const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validAccount = require('../resources/testAccount.json')
const Account = require('../../src/models/account')
const SECRET = require('../../src/config/global.json').secret

describe('Testing GET ONE ACCOUNT', () => {
  beforeAll(async () => {
    await deleteTestAccount()
  })
  afterAll(async () => {
    await deleteTestAccount()
    await mongoose.disconnect()
  })
  it('GET /api/accounts/:id should return status 200', async (done) => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/accounts')
      .set('authorization', SECRET)
      .send({ account: validAccount })
    const getResponse = await supertest(app.callback()).get(`/api/accounts/${postResponse.body.accountCreatedId}`)
    expect(getResponse.status).toBe(200)
    expect(getResponse.body.status).toBe('success')
    expect(getResponse.body.account._id).toBe(postResponse.body.accountCreatedId)
    done()
  })
})

async function deleteTestAccount () {
  await Account.deleteOne({ name: validAccount.name }, (error) => {
    if (error) {
      throw Error(error)
    }
  })
}
