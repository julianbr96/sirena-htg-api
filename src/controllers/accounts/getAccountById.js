'use strict'

const Account = require('../../models/account')

const getAccountById = async (ctx) => {
  await Account.findOne({ _id: ctx.params.id }, { name: 1 })
    .then((account) => {
      ctx.status = 200
      ctx.body = { account: account, status: 'success' }
    })
    .catch((error) => {
      ctx.status = 400
      ctx.body = { error: error, status: 'failed' }
    })
}

module.exports = getAccountById
