'use strict'

module.exports = async function (phone) {
  if (phone) {
    return phone.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)
  } else {
    return true
  }
}
