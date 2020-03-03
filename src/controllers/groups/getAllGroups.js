'use strict'

const Group = require('../../models/group')

const getAllGroups = async (ctx) => {
  await Group.find({}, { name: 1, parent: 1, account: 1 })
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
