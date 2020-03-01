'use strict'

const Account = require('../../../models/account')

const getAllAccounts = async ctx => {
  await Account.find()
    .then(accounts => {
      ctx.status = 200
      ctx.body = { accounts: accounts, status: 'success' }
    })
    .catch(error => {
      ctx.throw(400, 'Bad request')
    })
}

module.exports = getAllAccounts
