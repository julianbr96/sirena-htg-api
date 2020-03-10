'use strict'

module.exports = class UnauthorizedUser extends Error {
  constructor (explanation, code) {
    super('Unauthorized request')
    this.status = 401
    this.explanation = explanation
    this.code = code || 'UNAUTHORIZED'
  }
}
