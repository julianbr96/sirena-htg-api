'use strict'

const User = require('../../models/user')

const modifyUser = async (ctx) => {
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
    ctx.throw(404, 'User not found')
  }
}

module.exports = modifyUser
