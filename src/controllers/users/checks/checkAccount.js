'use strict'

const Account = require('../../../models/account')

module.exports = async function (accountId) {
  try {
    const account = await Account.findById(accountId)
    if (account) return true
    else return false
  } catch (error) {
    console.log(error)
    return false
  }
}
