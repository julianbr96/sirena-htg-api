'use strict'

const User = require('../../models/user')
const err = require('../../errors')
const errorCodes = require('../../config/global.json').errorCodes

const getUserById = async (ctx) => {
  await User.findOne(
    { _id: ctx.params.id },
    { group: 1, account: 1, firstName: 1, lastName: 1, userName: 1, roles: 1, available: 1, nin: 1, phone: 1 }
  )
    .populate('group', 'name parent account')
    .populate('account', 'name')
    .then((user) => {
      if (!user) {
        throw new err.NotFound('User not found', errorCodes.USER_NOT_FOUND)
      }
      ctx.status = 200
      ctx.body = { user: user, status: 'success' }
    })
    .catch((error) => {
      if (error.code !== errorCodes.USER_NOT_FOUND) {
        throw new err.GenericError(error)
      } else {
        throw error
      }
    })
}

module.exports = getUserById
