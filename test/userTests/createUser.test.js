const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validUser = require('../resources/testUser.json')
const User = require('../../src/models/user')

describe('Testing CREATE NEW USER', () => {
  beforeAll(async () => {
    await deleteTestUser()
  })
  afterAll(async () => {
    await deleteTestUser()
    await mongoose.disconnect()
  })
  it('POST /api/users should return status 201', async done => {
    const response = await supertest(app.callback())
      .post('/api/users')
      .send({ user: validUser })
    expect(response.status).toBe(201)
    expect(response.body.status).toBe('success')
    done()
  })
})

async function deleteTestUser () {
  await User.deleteOne({ userName: validUser.userName }, error => {
    if (error) {
      throw Error(error)
    }
  })
}
