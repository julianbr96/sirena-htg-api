'use strict'

const SECRET = require('../config/global.json').secret
const errorCodes = require('../config/global.json').errorCodes
const err = require('../errors')

module.exports = async (ctx, next) => {
  let token = ''
  if (ctx.request.header && ctx.request.header.authorization) {
    token = ctx.req.headers.authorization
  } else {
    throw new err.UnauthorizedUser('Authorization header is missing', errorCodes.MISSING_SECRET)
  }
  if (token === SECRET) {
    await next()
  } else {
    throw new err.UnauthorizedUser('Secret is not valid', errorCodes.INVALID_SECRET)
  }
}
