const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validUser = require('../resources/testUser.json')

describe('Testing DELETE ONE USER', () => {
  afterAll(async () => {
    await mongoose.disconnect()
  })
  it('DELETE /api/users/:id should return status 200', async (done) => {
    const postResponse = await supertest(app.callback()).post('/api/users').send({ user: validUser })
    const deleteResponse = await supertest(app.callback()).delete(`/api/users/${postResponse.body.userCreatedId}`)
    expect(deleteResponse.status).toBe(200)
    expect(deleteResponse.body.status).toBe('success')
    done()
  })
})
