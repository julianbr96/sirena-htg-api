'use strict'

const Group = require('../../models/group')

const getGroupById = async (ctx) => {
  await Group.findOne({ _id: ctx.params.id }, { name: 1, parent: 1, account: 1 })
    .populate('account', 'name')
    .populate('parent', 'name parent account')
    .then((group) => {
      ctx.status = 200
      ctx.body = { group: group, status: 'success' }
    })
    .catch((error) => {
      ctx.status = 400
      ctx.body = { error: error, status: 'failed' }
    })
}

module.exports = getGroupById
