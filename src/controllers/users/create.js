'use strict'

const User = require('../../models/user')

exports.createUser = async function(ctx) {
  const user = await new User(ctx.request.body.user)
  await user
    .save()
    .then(() => {
      ctx.status = 201
      ctx.body = { status: 'success', userCreatedId: user._id }
    })
    .catch(error => {
      ctx.status = 400
      ctx.body = {
        error: error,
        failedUser: user
      }
    })
}
