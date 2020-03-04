'use strict'

const Account = require('../../../models/account')

const modifyAccount = async (ctx) => {
  const accountToModify = await Account.findById(ctx.params.id).catch((error) => {
    ctx.status = 500
    ctx.body = { error: error }
  })
  if (accountToModify) {
    await Account.updateOne({ _id: ctx.params.id }, ctx.request.body.account, { runValidators: true })
      .then(() => {
        ctx.status = 201
        ctx.body = { status: 'success' }
      })
      .catch((error) => {
        ctx.status = 400
        ctx.body = { error: error }
      })
  } else {
    ctx.throw(404, 'Account not found')
  }
}

module.exports = modifyAccount
