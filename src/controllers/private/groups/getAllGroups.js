'use strict'

const Group = require('../../../models/group')

const getAllGroups = async (ctx) => {
  await Group.find()
    .then((groups) => {
      ctx.status = 200
      ctx.body = { groups: groups, status: 'success' }
    })
    .catch((error) => {
      console.log(error)
      ctx.throw(500, 'Internal Server Error')
    })
}

module.exports = getAllGroups
