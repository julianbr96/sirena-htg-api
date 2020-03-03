'use strict'

const User = require('../../models/user')

const getAllUsers = async (ctx) => {
  await User.find()
    .then((users) => {
      ctx.status = 200
      ctx.body = { users: users, status: 'success' }
    })
    .catch((error) => {
      console.log(error)
      ctx.throw(500, 'Internal Server Error')
    })
}

module.exports = getAllUsers
