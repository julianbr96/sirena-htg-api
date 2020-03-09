'use strict'

const Account = require('../../../models/account')

const getAllAccounts = async (ctx) => {
  await Account.find()
    .then((accounts) => {
      ctx.status = 200
      ctx.body = { accounts: accounts, status: 'success' }
    })
    .catch((error) => {
      ctx.status = 500
      ctx.body = { error: error, status: 'failed' }
    })
}

module.exports = getAllAccounts
