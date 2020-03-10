'use strict'

module.exports = class GenericError extends Error {
  constructor (error) {
    super('Internal Server Error')
    this.status = 500
    this.explanation = error
    this.code = 'SERVER_ERROR'
  }
}
