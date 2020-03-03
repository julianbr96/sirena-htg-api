'use strict'

const Group = require('../../models/group')

const getGroupById = async (ctx) => {
  await Group.findById(ctx.params.id)
    .then((group) => {
      ctx.status = 200
      ctx.body = { group: group, status: 'success' }
    })
    .catch((error) => {
      ctx.status = 404
      ctx.body = { error: error }
    })
}

module.exports = getGroupById
