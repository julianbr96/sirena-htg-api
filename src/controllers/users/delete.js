'use strict'

const User = require('../../models/user')

const deleteOneUser = async (ctx) => {
  const user = await User.findById(ctx.params.id).catch(async (error) => {
    ctx.status = 500
    ctx.body = { error: error, status: 'failed' }
  })
  if (user) {
    await User.deleteOne({ _id: ctx.params.id })
      .then(async () => {
        ctx.status = 200
        ctx.body = { status: 'deleted' }
      })
      .catch(async (error) => {
        ctx.status = 500
        ctx.body = { error: error, status: 'failed' }
      })
  } else {
    ctx.status = 404
    ctx.body = { error: 'User not found', status: 'failed' }
  }
}

module.exports = deleteOneUser
