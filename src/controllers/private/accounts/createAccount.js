'use strict'

const Account = require('../../../models/account')

const createAccount = async function(ctx) {
  const account = await new Account(ctx.request.body.account)
  await account
    .save()
    .then(() => {
      ctx.status = 201
      ctx.body = { status: 'success', accountCreatedId: account._id }
    })
    .catch(error => {
      ctx.status = 400
      ctx.body = {
        error: error,
        failedAccount: account
      }
    })
}

module.exports = createAccount
