const supertest = require('supertest')
const app = require('../src/app')
const mongoose = require('mongoose')

describe('Testing the server status', () => {
  afterAll(() => {
    mongoose.disconnect()
  })
  it('GET / should return status 200 and body {status : success}', async done => {
    const response = await supertest(app.callback()).get('/')
    
    expect(response.status).toBe(200)
    expect(response.body.status).toBe('success')
    done()
  })
})
