'use strict'

const Account = require('../../../models/account')

const modifyOneThing = async ctx => {
  await Account.updateOne({ _id: ctx.params.id }, ctx.request.body.account)
    .then(() => {
      ctx.status = 201
      ctx.body = { status: 'success' }
    })
    .catch(error => {
      ctx.status = 400
      ctx.body = { error: error }
    })
}

module.exports = modifyOneThing
