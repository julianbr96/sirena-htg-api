'use strict'

const Account = require('../../models/account')
const err = require('../../errors')
const errorCodes = require('../../config/global.json').errorCodes

const getAccountById = async (ctx) => {
  await Account.findOne({ _id: ctx.params.id }, { name: 1 })
    .then((account) => {
      if (!account) {
        throw new err.NotFound('Account not found', errorCodes.ACCOUNT_NOT_FOUND)
      }
      ctx.status = 200
      ctx.body = { account: account, status: 'success' }
    })
    .catch((error) => {
      if (error.code !== errorCodes.ACCOUNT_NOT_FOUND) {
        throw new err.GenericError(error)
      } else {
        throw error
      }
    })
}

module.exports = getAccountById
