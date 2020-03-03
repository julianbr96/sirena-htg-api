'use strict'

const Group = require('../../../models/group')

const modifyGroup = async (ctx) => {
  if (!ctx.request.body.group) {
    ctx.throw(400, 'No "group" field sent')
  }
  const groupToModify = await Group.findById(ctx.params.id).catch((error) => {
    ctx.status = 500
    ctx.body = { error: error }
  })
  if (groupToModify) {
    await Group.updateOne(groupToModify, ctx.request.body.group)
      .then(() => {
        ctx.status = 201
        ctx.body = { status: 'success' }
      })
      .catch((error) => {
        ctx.status = 400
        ctx.body = { error: error }
      })
  } else {
    ctx.throw(404, 'Group not found')
  }
}

module.exports = modifyGroup
