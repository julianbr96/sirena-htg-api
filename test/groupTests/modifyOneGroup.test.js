const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validGroup = require('../resources/testGroup.json')
const Group = require('../../src/models/group')
const SECRET = require('../../src/config/global.json').secret

describe('Testing MODIFY ONE GROUP', () => {
  beforeEach(async () => {
    await deleteTestAccount()
  })
  beforeAll(async () => {
    await deleteTestAccount()
  })
  afterAll(async () => {
    await deleteTestAccount()
    await mongoose.disconnect()
  })
  it('PUT /api/private/groups/:id should return status 201', async done => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/groups')
      .set('authorization', SECRET)
      .send({ group: validGroup })
    const putResponse = await supertest(app.callback())
      .put(`/api/private/groups/${postResponse.body.groupCreatedId}`)
      .set('authorization', SECRET)
      .send({ group: { countryCode: 'BR' } })
    expect(putResponse.status).toBe(201)
    expect(putResponse.body.status).toBe('success')
    done()
  })
  it('PUT /api/private/groups/:id without token should return status 401', async done => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/groups')
      .set('authorization', SECRET)
      .send({ group: validGroup })
    const putResponse = await supertest(app.callback())
      .put(`/api/private/groups/${postResponse.body.groupCreatedId}`)
      .send({ group: { countryCode: 'BR' } })
    expect(putResponse.status).toBe(401)
    done()
  })
})

async function deleteTestAccount () {
  await Group.deleteOne({ name: validGroup.name }, error => {
    if (error) {
      throw Error(error)
    }
  })
}
