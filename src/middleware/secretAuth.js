'use strict'

const SECRET = require('../config/global.json').secret

module.exports = async (ctx, next) => {
  let token = ''
  if (ctx.request.header && ctx.request.header.authorization) {
    token = ctx.req.headers.authorization
  } else {
    ctx.status = 401
    ctx.body = { error: 'Authorization header is missing', status: 'failed' }
  }
  if (token === SECRET) {
    await next()
  } else {
    ctx.status = 401
    ctx.body = { error: 'Unauthorized', status: 'failed' }
  }
}
