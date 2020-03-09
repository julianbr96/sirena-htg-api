'use strict'

const User = require('../../models/user')

const modifyUser = async (ctx) => {
  if (ctx.request.body.user.account) {
    ctx.status = 400
    ctx.body = { error: 'Cannot change user account', status: 'failed' }
  } else {
    if (!ctx.request.body.user) {
      ctx.status = 400
      ctx.body = { error: 'No user path sent', status: 'failed' }
    } else {
      const userToModify = await User.findById(ctx.params.id).catch((error) => {
        ctx.status = 500
        ctx.body = { error: error, status: 'failed' }
      })
      if (userToModify) {
        await User.updateOne({ _id: ctx.params.id }, ctx.request.body.user, { runValidators: true })
          .then(() => {
            ctx.status = 201
            ctx.body = { status: 'success' }
          })
          .catch((error) => {
            ctx.status = 400
            ctx.body = { error: error, status: 'failed' }
          })
      } else {
        ctx.status = 404
        ctx.body = { error: 'User not found', status: 'failed' }
      }
    }
  }
}
module.exports = modifyUser
