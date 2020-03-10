'use strict'

const User = require('../../models/user')
const err = require('../../errors')
const errorCodes = require('../../config/global.json').errorCodes
const checkModifiableArguments = require('./checkModifiableArguments')

const modifyUser = async (ctx) => {
  if (ctx.request.body.user.account) {
    throw new err.InvalidArgument('Cannot change user account')
  }
  await checkModifiableArguments(ctx)
  const userToModify = await User.findById(ctx.params.id).catch((error) => {
    throw new err.GenericError(error)
  })
  if (userToModify) {
    await User.updateOne({ _id: ctx.params.id }, ctx.request.body.user, { runValidators: true })
      .then(() => {
        ctx.status = 201
        ctx.body = { status: 'success' }
      })
      .catch((error) => {
        throw new err.GenericError(error)
      })
  } else {
    throw new err.NotFound('User not found', errorCodes.USER_NOT_FOUND)
  }
}

module.exports = modifyUser
