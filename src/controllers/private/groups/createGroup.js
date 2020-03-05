'use strict'

const Group = require('../../../models/group')

const createGroup = async function (ctx) {
  if (!ctx.request.body.group) {
    ctx.throw(400, 'No "group" path sent')
  }
  const group = await new Group(ctx.request.body.group)
  await group
    .save()
    .then(() => {
      ctx.status = 201
      ctx.body = { status: 'success', groupCreatedId: group._id }
    })
    .catch((error) => {
      ctx.status = 400
      ctx.body = {
        error: error,
        failedGroup: group,
        status: 'failed'
      }
    })
}

module.exports = createGroup
