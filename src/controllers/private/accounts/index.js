'use strict'

const createAccount = require('./createAccount')
const getAllAccounts = require('./getAllAccounts')
const modifyAccount = require('./modifyAccount')
const deleteAccount = require('./deleteAccount')

module.exports = {
  createAccount,
  getAllAccounts,
  modifyAccount,
  deleteAccount
}
