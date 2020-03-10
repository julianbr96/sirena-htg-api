'use strict'

const Group = require('../../../models/group')

module.exports = async function (groupId) {
  if (groupId) {
    try {
      const group = await Group.findById(groupId)
      if (group) return true
      else return false
    } catch (error) {
      console.log(error)
      return false
    }
  } else {
    return true
  }
}
