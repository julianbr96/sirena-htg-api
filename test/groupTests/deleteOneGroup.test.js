const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validGroup = require('../resources/testGroup.json')
const SECRET = require('../../src/config/global.json').secret

describe('Testing DELETE ONE GROUP ', () => {
  afterAll(async () => {
    await mongoose.disconnect()
  })
  it('DELETE /api/private/groups/:id should return status 200', async (done) => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/groups')
      .send({ group: validGroup })
      .set('authorization', SECRET)
    const deleteResponse = await supertest(app.callback()).delete(
      `/api/private/groups/${postResponse.body.groupCreatedId}`
    ).set('authorization', SECRET)
    expect(deleteResponse.status).toBe(200)
    expect(deleteResponse.body.status).toBe('deleted')
    done()
  })
  it('DELETE /api/private/accounts/:id without token should return status 401', async (done) => {
    const response = await supertest(app.callback()).delete('/api/private/groups/validid')
    expect(response.status).toBe(401)
    done()
  })
})
