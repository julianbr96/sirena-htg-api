'use strict'

const User = require('../../models/user')

const getUserById = async (ctx) => {
  await User.findById(ctx.params.id)
    .then((user) => {
      ctx.status = 200
      ctx.body = { user: user, status: 'success' }
    })
    .catch((error) => {
      ctx.status = 400
      ctx.body = { error: error }
    })
}

module.exports = getUserById
