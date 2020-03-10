'use strict'

const User = require('../../models/user')
const checkArguments = require('./checkArguments')
const err = require('../../errors')

const createUser = async function (ctx) {
  await checkArguments(ctx)
  const user = new User(ctx.request.body.user)
  await user
    .save()
    .then(() => {
      ctx.status = 201
      ctx.body = { status: 'success', userCreatedId: user._id }
    })
    .catch((error) => {
      throw new err.GenericError(error)
    })
}

module.exports = createUser
