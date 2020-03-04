const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validAccount = require('../resources/testAccount.json')
const SECRET = require('../../src/config/global.json').secret

describe('Testing DELETE ONE ACCOUNT', () => {
  afterAll(async () => {
    await mongoose.disconnect()
  })
  it('DELETE /api/private/accounts/:id should return status 200', async (done) => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/accounts')
      .send({ account: validAccount })
      .set('authorization', SECRET)
    const deleteResponse = await supertest(app.callback()).delete(
      `/api/private/accounts/${postResponse.body.accountCreatedId}`
    ).set('authorization', SECRET)
    expect(deleteResponse.status).toBe(200)
    expect(deleteResponse.body.status).toBe('deleted')
    done()
  })
  it('DELETE /api/private/accounts/:id without token should return status 401', async (done) => {
    const response = await supertest(app.callback()).delete('/api/private/accounts/validid')
    expect(response.status).toBe(401)
    done()
  })
})
