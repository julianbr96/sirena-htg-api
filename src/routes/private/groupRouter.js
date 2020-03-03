'use strict'

const Router = require('koa-router')
const router = new Router()
const groupController = require('../../controllers/private/groups')
const baseUrl = '/api/private/groups'
const auth = require('../../middleware/secretAuth')

router.put(`${baseUrl}/:id`, auth, groupController.modifyGroup)
router.post(`${baseUrl}/`, auth, groupController.createGroup)

module.exports = router
