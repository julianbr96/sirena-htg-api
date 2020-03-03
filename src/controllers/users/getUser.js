'use strict'

const User = require('../../models/user')

const getUserById = async (ctx) => {
  await User.findOne(
    { _id: ctx.params.id },
    { group: 1, account: 1, firstName: 1, lastName: 1, userName: 1, roles: 1, available: 1, nin: 1, phone: 1 }
  )
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
