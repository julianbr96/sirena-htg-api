'use strict'

const { createAccount } = require('./createAccount')
const { getAllAccounts } = require('./getAllAccounts')
const { getAccountById } = require('./getAccountById')
const { modifyAccount } = require('./modifyAccount')

module.exports = {
  createAccount,
  getAllAccounts,
  getAccountById,
  modifyAccount
}
