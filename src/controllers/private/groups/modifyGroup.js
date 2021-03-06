'use strict'

const Group = require('../../../models/group')

const modifyGroup = async (ctx) => {
  if (!ctx.request.body.group) {
    ctx.status = 400
    ctx.body = { error: 'No group path sent', status: 'failed' }
  } else {
    if (ctx.request.body.group.account) {
      ctx.status = 400
      ctx.body = { error: 'Cannot change group account', status: 'failed' }
    } else {
      const groupToModify = await Group.findById(ctx.params.id).catch((error) => {
        ctx.status = 500
        ctx.body = { error: error, status: 'failed' }
      })
      if (groupToModify) {
        await Group.updateOne({ _id: ctx.params.id }, ctx.request.body.group, { runValidators: true })
          .then(() => {
            ctx.status = 201
            ctx.body = { status: 'success' }
          })
          .catch((error) => {
            ctx.status = 400
            ctx.body = { error: error, status: 'failed' }
          })
      } else {
        ctx.status = 404
        ctx.body = { error: 'Group not found', status: 'failed' }
      }
    }
  }
}
module.exports = modifyGroup
