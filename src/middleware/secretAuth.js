'use strict'

const SECRET = require('../config/global.json').secret

module.exports = async (ctx, next) => {
  let token = ''
  if (ctx.request.header && ctx.request.header.authorization) {
    token = ctx.req.headers.authorization
  } else {
    ctx.throw(401, 'Authorization header is missing')
  }
  if (token === SECRET) {
    await next()
  } else {
    ctx.throw(401, 'Unauthorized')
  }
}
