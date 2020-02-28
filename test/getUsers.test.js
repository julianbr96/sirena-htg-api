const supertest = require('supertest')
const app = require('../src/app')
const mongoose = require('mongoose')

describe('Testing GET users', () => {
  afterAll(() => {
    mongoose.disconnect()
  })
  it('GET /api/users should return status 200', async done => {
    const response = await supertest(app.callback()).get('/api/users')
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('success')
    done()
  })
  it('GET /api/users/:id should return status 200 and requested user', async done => {
    const user = new User(validUser)
    const response = await supertest(app.callback()).get(
      `/api/users/${user.id}`
    )
    expect(response.status).toBe(200)
    expect(response.body).toBe(user)
    done()
  })
})
