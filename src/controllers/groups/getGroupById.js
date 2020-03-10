'use strict'

const Group = require('../../models/group')
const err = require('../../errors')
const errorCodes = require('../../config/global.json').errorCodes

const getGroupById = async (ctx) => {
  await Group.findOne({ _id: ctx.params.id }, { name: 1, parent: 1, account: 1 })
    .populate('account', 'name')
    .populate('parent', 'name parent account')
    .then((group) => {
      if (!group) {
        throw new err.NotFound('Group not found', errorCodes.GROUP_NOT_FOUND)
      }
      ctx.status = 200
      ctx.body = { group: group, status: 'success' }
    })
    .catch((error) => {
      if (error.code !== errorCodes.GROUP_NOT_FOUND) {
        throw new err.GenericError(error)
      } else {
        throw error
      }
    })
}

module.exports = getGroupById
