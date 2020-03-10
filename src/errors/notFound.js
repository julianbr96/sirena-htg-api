'use strict'

module.exports = class NotFound extends Error {
  constructor (explanation, code) {
    super('Not Found')
    this.status = 404
    this.explanation = explanation
    this.code = code || 'NOT_FOUND'
  }
}
