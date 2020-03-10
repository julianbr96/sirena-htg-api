'use strict'

module.exports = async function (userName) {
  if (userName) {
    return userName.match(/^.+@[^\.].*\.[a-z]{2,}$/)
  } else {
    return true
  }
}
