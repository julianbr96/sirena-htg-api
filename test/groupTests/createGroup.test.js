const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validGroup = require('../resources/testGroup.json')
const Group = require('../../src/models/group')
const SECRET = require('../../src/config/global.json').secret

describe('Testing CREATE NEW ACCOUNT', () => {
  beforeAll(async () => {
    await deleteTestAccount()
  })
  afterAll(async () => {
    await deleteTestAccount()
    await mongoose.disconnect()
  })
  it('POST /api/private/groups should return status 201', async done => {
    const response = await supertest(app.callback())
      .post('/api/private/groups')
      .set('authorization', SECRET)
      .send({ group: validGroup })
    expect(response.status).toBe(201)
    expect(response.body.status).toBe('success')
    done()
  })
  it('POST /api/private/groups without token should return status 401', async done => {
    const response = await supertest(app.callback())
      .post('/api/private/groups')
      .send({ group: validGroup })
    expect(response.status).toBe(401)
    done()
  })
})

async function deleteTestAccount() {
  await Group.deleteOne({ name: validGroup.name }, error => {
    if (error) {
      throw Error(error)
    }
  })
}
