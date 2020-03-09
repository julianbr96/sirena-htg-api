'use strict'

const Account = require('../../../models/account')

const deleteOneAccount = async (ctx) => {
  const account = await Account.findById(ctx.params.id).then().catch(async (error) => {
    ctx.status = 500
    ctx.body = { error: error, status: 'failed' }
  })
  if (account) {
    await Account.deleteOne({ _id: ctx.params.id })
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
    ctx.body = { error: 'Account not found', status: 'failed' }
  }
}

module.exports = deleteOneAccount
