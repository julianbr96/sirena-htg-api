const supertest = require('supertest')
const app = require('../../src/app')
const mongoose = require('mongoose')
const validGroup = require('../resources/testGroup.json')
const Group = require('../../src/models/group')
const SECRET = require('../../src/config/global.json').secret

describe('Testing GET ONE GROUP', () => {
  beforeAll(async () => {
    await deleteTestGroup()
  })
  afterAll(async () => {
    await deleteTestGroup()
    await mongoose.disconnect()
  })
  it('GET /api/groups/:id should return status 200', async (done) => {
    const postResponse = await supertest(app.callback())
      .post('/api/private/groups')
      .set('authorization', SECRET)
      .send({ group: validGroup })
    const getResponse = await supertest(app.callback()).get(`/api/groups/${postResponse.body.groupCreatedId}`)
    expect(getResponse.status).toBe(200)
    expect(getResponse.body.status).toBe('success')
    expect(getResponse.body.group._id).toBe(postResponse.body.groupCreatedId)
    done()
  })
})

async function deleteTestGroup () {
  await Group.deleteOne({ name: validGroup.name }, (error) => {
    if (error) {
      throw Error(error)
    }
  })
}
