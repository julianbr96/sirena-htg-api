'use strict'

const err = require('../../errors')
const errorCodes = require('../../config/global.json').errorCodes
const checkAccount = require('./checks/checkAccount')
const checkModifiableArguments = require('./checkModifiableArguments')

module.exports = async function checkArguments (ctx) {
  if (!ctx.request.body.user.userName) {
    throw new err.InvalidArgument('userName', 'userName is required', errorCodes.MISSING_USER)
  }
  if (!ctx.request.body.user.roles) {
    throw new err.InvalidArgument('roles', 'User roles are required', errorCodes.MISSING_ROLE)
  }
  if (!ctx.request.body.user.group) {
    throw new err.InvalidArgument('group', 'group is required', errorCodes.MISSING_GROUP)
  }
  if (!ctx.request.body.user.account) {
    throw new err.InvalidArgument('account', 'account is required', errorCodes.MISSING_ACCOUNT)
  }
  if (!ctx.request.body.user.phone) {
    throw new err.InvalidArgument('phone', 'phone is required', errorCodes.MISSING_PHONE)
  }
  if (!ctx.request.body.user.password) {
    throw new err.InvalidArgument('password', 'Password is required when creating a user', errorCodes.MISSING_PASSWORD)
  }
  if (!await checkAccount(ctx.request.body.user.account)) {
    throw new err.InvalidArgument('account', 'Account does not exists', errorCodes.INVALID_ACCOUNT)
  }
  await checkModifiableArguments(ctx)
}
