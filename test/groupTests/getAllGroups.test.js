const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')

describe('Testing GET ALL ACCOUNTS', () => {
  afterAll(async () => {
    await mongoose.disconnect()
  })
  it('GET /api/groups should return status 200', async (done) => {
    const response = await supertest(app.callback()).get('/api/groups')
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('success')
    expect(response.body.groups).toBeDefined()
    done()
  })
})
