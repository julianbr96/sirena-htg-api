'use strict'

const bcrypt = require('bcrypt')
const BCRYPT_SALT_ROUNDS = require('../config/global.json').BCRYPT_SALT_ROUNDS
const err = require('../errors')
const errorCodes = require('../config/global.json').errorCodes

module.exports = async (ctx, next) => {
  if (!ctx.request.body.user) {
    throw new err.InvalidArgument('user', 'No user path sent', errorCodes.MISSING_USER)
  }
  const pass = ctx.request.body.user.password
  if (pass) {
    if (pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) {
      ctx.request.body.user.password = bcrypt.hashSync(pass, BCRYPT_SALT_ROUNDS)
      await next()
    } else {
      throw new err.InvalidArgument(
        'password',
        'Password must have one upper, one lower, one number and 8 characters at least',
        errorCodes.INVALID_PASSWORD
      )
    }
  } else {
    await next()
  }
}
