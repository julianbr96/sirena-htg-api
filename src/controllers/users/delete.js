'use strict'

const User = require('../../models/user')
const err = require('../../errors')
const errorCodes = require('../../config/global.json').errorCodes

const deleteOneUser = async (ctx) => {
  const user = await User.findById(ctx.params.id).catch(async (error) => {
    throw new err.GenericError(error)
  })
  if (user) {
    await User.deleteOne({ _id: ctx.params.id })
      .then(async () => {
        ctx.status = 200
        ctx.body = { status: 'deleted' }
      })
      .catch(async (error) => {
        throw new err.GenericError(error)
      })
  } else {
    throw new err.NotFound('User not found', errorCodes.USER_NOT_FOUND)
  }
}

module.exports = deleteOneUser
