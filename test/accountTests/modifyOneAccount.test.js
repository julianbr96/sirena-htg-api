const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validAccount = require('../resources/testAccount.json')
const Account = require('../../src/models/account')
const SECRET = require('../../src/config/global.json').secret

describe('Testing CREATE NEW ACCOUNT', () => {
  afterAll(() => {
    mongoose.disconnect()
  })
  it('POST /api/private/accounts should return status 201', async done => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/accounts')
      .set('authorization', SECRET)
      .send({ account: validAccount })
    validAccount.name = 'test2'
    const putResponse = await supertest(app.callback())
      .put(`/api/private/accounts/${postResponse.body.accountCreatedId}`)
      .set('authorization', SECRET)
      .send({ account: validAccount })
    expect(putResponse.status).toBe(201)
    expect(putResponse.body.status).toBe('success')
    await Account.deleteOne(
      { name: validAccount.name },
      error => {
        if (error) {
          throw Error(error)
        }
      }
    )
    done()
  })
})
