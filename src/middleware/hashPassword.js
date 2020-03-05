'use strict'

const bcrypt = require('bcrypt')
const BCRYPT_SALT_ROUNDS = 12

module.exports = async (ctx, next) => {
  if (!ctx.request.body.user) {
    ctx.throw(400, 'No "user" path sent')
  }
  const pass = ctx.request.body.user.password
  if (pass) {
    if (pass.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/)) {
      ctx.request.body.user.password = bcrypt.hashSync(pass, BCRYPT_SALT_ROUNDS)
      await next()
    } else {
      ctx.status = 400
      ctx.body = {
        error: {
          errors: {
            password: {
              path: 'password',
              kind: 'invalid',
              message: 'Invalid Password. Must have one upper, one lower, one number and 8 characters at least',
              value: pass
            }
          }
        },
        status: 'failed'
      }
    }
  } else {
    await next()
  }
}
