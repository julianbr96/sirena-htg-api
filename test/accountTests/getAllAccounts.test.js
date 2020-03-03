const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const SECRET = require('../../src/config/global.json').secret

describe('Testing GET ALL ACCOUNTS', () => {
  afterAll(async () => {
    await mongoose.disconnect()
  })
  it('GET /api/private/accounts should return status 200', async (done) => {
    const response = await supertest(app.callback()).get('/api/private/accounts').set('authorization', SECRET)
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('success')
    expect(response.body.accounts).toBeDefined()
    done()
  })
  it('GET /api/private/accounts without token should return status 401', async (done) => {
    const response = await supertest(app.callback()).get('/api/private/accounts')
    expect(response.status).toBe(401)
    done()
  })
})
