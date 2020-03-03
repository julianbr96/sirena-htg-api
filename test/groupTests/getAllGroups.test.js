const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const SECRET = require('../../src/config/global.json').secret

describe('Testing GET ALL ACCOUNTS', () => {
  afterAll(async () => {
    await mongoose.disconnect()
  })
  it('GET /api/private/groups should return status 200', async (done) => {
    const response = await supertest(app.callback()).get('/api/private/groups').set('authorization', SECRET)
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('success')
    done()
  })
  it('GET /api/private/groups without token should return status 401', async (done) => {
    const response = await supertest(app.callback()).get('/api/private/groups')
    expect(response.status).toBe(401)
    done()
  })
})
