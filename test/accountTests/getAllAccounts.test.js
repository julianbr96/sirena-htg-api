const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const SECRET = require('../../src/config/global.json').secret

describe('Testing GET ALL ACCOUNTS', () => {
  afterAll(() => {
    mongoose.disconnect()
  })
  it('GET /api/private/accounts should return status 200', async done => {
    const response = await supertest(app.callback())
      .get('/api/private/accounts')
      .set('authorization', SECRET)
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('success')
    done()
  })
})
