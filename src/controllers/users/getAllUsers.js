'use strict'

const User = require('../../models/user')

const getAllUsers = async (ctx) => {
  await User.find({}, { group: 1, account: 1, firstName: 1, lastName: 1, userName: 1, roles: 1, available: 1 })
    .populate('group', 'name parent account')
    .populate('account', 'name')
    .then((users) => {
      ctx.status = 200
      ctx.body = { users: users, status: 'success' }
    })
    .catch((error) => {
      console.log(error)
      ctx.status = 500
      ctx.body = { error: error, status: 'failed' }
    })
}

module.exports = getAllUsers
