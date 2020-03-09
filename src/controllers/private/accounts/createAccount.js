'use strict'

const Account = require('../../../models/account')

const createAccount = async function (ctx) {
  if (!ctx.request.body.account) {
    ctx.status = 400
    ctx.body = { error: 'No "account" path sent', status: 'failed' }
  } else {
    const account = new Account(ctx.request.body.account)
    await account
      .save()
      .then(() => {
        ctx.status = 201
        ctx.body = { status: 'success', accountCreatedId: account._id }
      })
      .catch((error) => {
        ctx.status = 400
        ctx.body = {
          error: error,
          failedAccount: account,
          status: 'failed'
        }
      })
  }
}

module.exports = createAccount
