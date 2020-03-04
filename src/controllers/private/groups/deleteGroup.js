'use strict'

const Group = require('../../../models/group')

const deleteOneGroup = async (ctx) => {
  const group = await Group.findById(ctx.params.id).then().catch(async (error) => {
    ctx.status = 500
    ctx.body = { error: error }
  })
  if (group) {
    await Group.deleteOne(group)
      .then(async () => {
        ctx.status = 200
        ctx.body = { status: 'deleted' }
      })
      .catch(async (error) => {
        ctx.status = 500
        ctx.body = { error: error }
      })
  } else {
    ctx.throw(404, 'Group not found')
  }
}

module.exports = deleteOneGroup
