const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validUser = require('../resources/testUser.json')
const User = require('../../src/models/user')

describe('Testing VALIDATORS for USERS', () => {
  beforeAll(async () => {
    await deleteTestUser()
  })
  afterAll(async () => {
    await deleteTestUser()
    await mongoose.disconnect()
  })
  it('POST /api/users with invalid paths should return status 400', async (done) => {
    const invalidUser = { ...validUser }
    invalidUser.phone = 'invalidPhone'
    invalidUser.userName = 'invalidUserName'
    invalidUser.language = 'invalidLanguage'
    invalidUser.roles = [
      'invalidRole'
    ]
    const response = await supertest(app.callback()).post('/api/users').send({ user: invalidUser })
    expect(response.status).toBe(400)
    expect(response.body.error.errors.phone).toBeDefined()
    expect(response.body.error.errors.userName).toBeDefined()
    expect(response.body.error.errors.language).toBeDefined()
    done()
  })
  it('PUT /api/users/:id with invalid paths should return status 400', async (done) => {
    const postResponse = await supertest(app.callback()).post('/api/users').send({ user: validUser })
    const putResponse = await supertest(app.callback())
      .put(`/api/users/${postResponse.body.userCreatedId}`)
      .send({ user: { language: 'invalidLanguage', phone: 'invalidPhone' } })
    expect(putResponse.status).toBe(400)
    expect(putResponse.body.error.errors.phone).toBeDefined()
    expect(putResponse.body.error.errors.language).toBeDefined()
    done()
  })
  it('POST /api/users with invalid password should return status 400', async (done) => {
    const invalidUser = { ...validUser }
    invalidUser.password = 'invalidpass'
    const response = await supertest(app.callback()).post('/api/users').send({ user: invalidUser })
    expect(response.status).toBe(400)
    expect(response.body.error.errors.password).toBeDefined()
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
