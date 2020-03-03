'use strict'

const User = require('../../models/user')

const modifyUser = async (ctx) => {
  if (!ctx.request.body.user) {
    ctx.throw(400, 'No "user" field sent')
  }
  const userToModify = await User.findById(ctx.params.id).catch((error) => {
    ctx.status = 500
    ctx.body = { error: error }
  })
  if (userToModify) {
    await User.updateOne(userToModify, ctx.request.body.user)
      .then(() => {
        ctx.status = 201
        ctx.body = { status: 'success' }
      })
      .catch((error) => {
        ctx.status = 400
        ctx.body = { error: error }
      })
  } else {
    ctx.throw(404, 'Group not found')
  }
}

module.exports = modifyUser
