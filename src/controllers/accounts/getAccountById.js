'use strict'

const Account = require('../../models/account')

const getAccountById = async (ctx) => {
  await Account.findById(ctx.params.id)
    .then((account) => {
      ctx.status = 200
      ctx.body = { account: account, status: 'success' }
    })
    .catch((error) => {
      ctx.status = 400
      ctx.body = { error: error }
    })
}

module.exports = getAccountById
