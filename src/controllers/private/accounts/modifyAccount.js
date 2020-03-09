'use strict'

const Account = require('../../../models/account')

const modifyAccount = async (ctx) => {
  if (!ctx.request.body.account) {
    ctx.status = 400
    ctx.body = { error: 'No account path sent', status: 'failed' }
  } else {
    const accountToModify = await Account.findById(ctx.params.id).catch((error) => {
      ctx.status = 500
      ctx.body = { error: error, status: 'failed' }
    })
    if (accountToModify) {
      await Account.updateOne({ _id: ctx.params.id }, ctx.request.body.account, { runValidators: true })
        .then(() => {
          ctx.status = 201
          ctx.body = { status: 'success' }
        })
        .catch((error) => {
          ctx.status = 400
          ctx.body = { error: error, status: 'failed' }
        })
    } else {
      ctx.status = 404
      ctx.body = { error: 'Account not found', status: 'failed' }
    }
  }
}

module.exports = modifyAccount
