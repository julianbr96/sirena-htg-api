'use strict'

const Account = require('../../../models/account')

const deleteOneAccount = async (ctx) => {
  const account = await Account.findById(ctx.params.id).then().catch(async (error) => {
    ctx.status = 500
    ctx.body = { error: error }
  })
  if (account) {
    await Account.deleteOne(account)
      .then(async () => {
        ctx.status = 200
        ctx.body = { status: 'deleted' }
      })
      .catch(async (error) => {
        ctx.status = 500
        ctx.body = { error: error }
      })
  } else {
    ctx.throw(404, 'Account not found')
  }
}

module.exports = deleteOneAccount
