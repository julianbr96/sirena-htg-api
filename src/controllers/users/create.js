'use strict'

const User = require('../../models/user')

const createUser = async function (ctx) {
  const user = new User(ctx.request.body.user)
  await user
    .save()
    .then(() => {
      ctx.status = 201
      ctx.body = { status: 'success', userCreatedId: user._id }
    })
    .catch((error) => {
      user.password = undefined
      ctx.status = 400
      ctx.body = {
        error: error,
        failedUser: user,
        status: 'failed'
      }
    })
}

module.exports = createUser
