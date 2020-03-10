'use strict'

const User = require('../../../models/user')

module.exports = async (userName) => {
  if (userName) {
    try {
      const user = await User.findOne({ userName: userName })
      if (user) return true
      else return false
    } catch (error) {
      console.log(error)
      throw error
    }
  } else {
    return false
  }
}
