'use strict'

const User = require('../../models/user')

const deleteOneUser = async (ctx) => {
  const user = await User.findById(ctx.params.id).catch(async (error) => {
    ctx.status = 500
    ctx.body = { error: error }
  })
  if (user) {
    await User.deleteOne({ _id: ctx.params.id })
      .then(async () => {
        ctx.status = 200
        ctx.body = { status: 'deleted' }
      })
      .catch(async (error) => {
        ctx.status = 500
        ctx.body = { error: error }
      })
  } else {
    ctx.throw(404, 'User not found')
  }
}

module.exports = deleteOneUser
