'use strict'

const userRolesValues = require('../../../config/global.json').userRolesValues

module.exports = (roles) => {
  if (roles) {
    const roleIds = Object.keys(userRolesValues).map((key) => userRolesValues[key].toString())
    const notFoundRoles = roles.filter((role) => !roleIds.includes(role))
    return notFoundRoles.length === 0
  } else {
    return true
  }
}
