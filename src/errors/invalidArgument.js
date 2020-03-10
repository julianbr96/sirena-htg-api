'use strict'

module.exports = class InvalidArgumentError extends Error {
  constructor (argumentName, explanation, code) {
    const message = explanation
      ? `Invalid argument "${argumentName}": ${explanation}`
      : `Invalid argument "${argumentName}"`

    super(message)
    this.status = 400
    this.argumentName = argumentName
    this.explanation = explanation
    this.code = code || 'INVALID_ARGUMENT'
  }
}
