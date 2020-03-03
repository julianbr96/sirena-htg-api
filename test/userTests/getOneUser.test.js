const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validUser = require('../resources/testUser.json')
const User = require('../../src/models/user')

describe('Testing GET ONE USER', () => {
  beforeAll(async () => {
    await deleteTestUser()
  })
  afterAll(async () => {
    await deleteTestUser()
    await mongoose.disconnect()
  })
  it('GET /api/users/:id should return status 200', async (done) => {
    const postResponse = await supertest(app.callback()).post('/api/users').send({ user: validUser })
    const getResponse = await supertest(app.callback()).get(`/api/users/${postResponse.body.userCreatedId}`)
    expect(getResponse.status).toBe(200)
    expect(getResponse.body.status).toBe('success')
    expect(getResponse.body.user._id).toBe(postResponse.body.userCreatedId)
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
