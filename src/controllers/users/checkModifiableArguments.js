'use strict'

const checkExistingUser = require('./checks/checkExistingUser')
const checkValidRoles = require('./checks/checkValidRoles')
const checkGroup = require('./checks/checkGroup')
const checkPhone = require('./checks/checkPhone')
const checkUserName = require('./checks/checkUserName')
const checkValidLanguage = require('./checks/checkValidLanguage')
const err = require('../../errors')
const errorCodes = require('../../config/global.json').errorCodes

module.exports = async function checkModifiableArguments (ctx) {
  if (await checkExistingUser(ctx.request.body.user.userName)) {
    throw new err.InvalidArgument('userName', 'User with that username already exists', errorCodes.USER_ALREADY_EXISTS)
  }
  if (!checkValidRoles(ctx.request.body.user.roles)) {
    throw new err.InvalidArgument('roles', 'Role sent is not supported', errorCodes.INVALID_ROLE)
  }
  if (!await checkGroup(ctx.request.body.user.group)) {
    throw new err.InvalidArgument('group', 'Group does not exists', errorCodes.INVALID_GROUP)
  }
  if (!await checkPhone(ctx.request.body.user.phone)) {
    throw new err.InvalidArgument(
      'phone',
      'Invalid Phone format. Must match /^+(?:[0-9] ?){6,14}[0-9]$/',
      errorCodes.INVALID_PHONE
    )
  }
  if (!await checkUserName(ctx.request.body.user.userName)) {
    throw new err.InvalidArgument(
      'userName',
      'Invalid userName format. Use email format (must match /^.+@[^.].*.[a-z]{2,}$/ regex)',
      errorCodes.INVALID_USER
    )
  }
  if (!checkValidLanguage(ctx.request.body.user.language)) {
    throw new err.InvalidArgument('language', 'Language sent is not supported', errorCodes.INVALID_LANGUAGE)
  }
}
