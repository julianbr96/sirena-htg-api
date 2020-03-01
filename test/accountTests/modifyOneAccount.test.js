const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validAccount = require('../resources/testAccount.json')
const Account = require('../../src/models/account')
const SECRET = require('../../src/config/global.json').secret

describe('Testing MODIFY ONE ACCOUNT', () => {
  beforeEach(async () => {
    await deleteTestAccount()
  })
  beforeAll(async () => {
    await deleteTestAccount()
  })
  afterAll(async () => {
    await deleteTestAccount()
    await mongoose.disconnect()
  })
  it('PUT /api/private/accounts/:id should return status 201', async done => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/accounts')
      .set('authorization', SECRET)
      .send({ account: validAccount })
    const putResponse = await supertest(app.callback())
      .put(`/api/private/accounts/${postResponse.body.accountCreatedId}`)
      .set('authorization', SECRET)
      .send({ account: { countryCode: 'BR' } })
    expect(putResponse.status).toBe(201)
    expect(putResponse.body.status).toBe('success')
    done()
  })
  it('PUT /api/private/accounts/:id without token should return status 401', async done => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/accounts')
      .set('authorization', SECRET)
      .send({ account: validAccount })
    const putResponse = await supertest(app.callback())
      .put(`/api/private/accounts/${postResponse.body.accountCreatedId}`)
      .send({ account: { countryCode: 'BR' } })
    expect(putResponse.status).toBe(401)
    done()
  })
})

async function deleteTestAccount() {
  await Account.deleteOne({ name: validAccount.name }, error => {
    if (error) {
      throw Error(error)
    }
  })
}
