'use strict'

const Group = require('../../models/group')
const err = require('../../errors')

const getAllGroups = async (ctx) => {
  await Group.find({}, { name: 1, parent: 1, account: 1 })
    .populate('account', 'name')
    .populate('parent', 'name parent account')
    .then((groups) => {
      ctx.status = 200
      ctx.body = { groups: groups, status: 'success' }
    })
    .catch((error) => {
      throw new err.GenericError(error)
    })
}

module.exports = getAllGroups
