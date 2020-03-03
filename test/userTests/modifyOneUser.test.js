const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validUser = require('../resources/testUser.json')
const User = require('../../src/models/user')

describe('Testing MODIFY ONE USER', () => {
  beforeEach(async () => {
    await deleteTestUser()
  })
  beforeAll(async () => {
    await deleteTestUser()
  })
  afterAll(async () => {
    await deleteTestUser()
    await mongoose.disconnect()
  })
  it('PUT /api/users/:id should return status 201', async (done) => {
    const postResponse = await supertest(app.callback()).post('/api/users').send({ user: validUser })
    const putResponse = await supertest(app.callback())
      .put(`/api/users/${postResponse.body.userCreatedId}`)
      .send({ user: { language: 'pt' } })
    expect(putResponse.status).toBe(201)
    expect(putResponse.body.status).toBe('success')
    done()
  })
})

async function deleteTestUser () {
  await User.deleteOne({ userName: validUser.userName }, (error) => {
    if (error) {
      throw Error(error)
    }
  })
}
