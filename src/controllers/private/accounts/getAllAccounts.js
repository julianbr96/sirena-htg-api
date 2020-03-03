'use strict'

const Account = require('../../../models/account')

const getAllAccounts = async (ctx) => {
  await Account.find()
    .then((accounts) => {
      ctx.status = 200
      ctx.body = { accounts: accounts, status: 'success' }
    })
    .catch((error) => {
      console.log(error)
      ctx.throw(500, 'Internal Server Error')
    })
}

module.exports = getAllAccounts
