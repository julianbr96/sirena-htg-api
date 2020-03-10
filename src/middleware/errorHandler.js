'use strict'

module.exports = async function (ctx, next) {
  try {
    await next()
  } catch (error) {
    ctx.status = error.status
    ctx.body = { error: error, status: 'failed' }
  }
}
