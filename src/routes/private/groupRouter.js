'use strict'

const Router = require('koa-router')
const router = new Router()
const groupController = require('../../controllers/private/groups')
const baseUrl = require('../../config/global.json').apiEndpoints.privateGroupRoutes
const auth = require('../../middleware/secretAuth')

router.put(`${baseUrl}/:id`, auth, groupController.modifyGroup)
router.delete(`${baseUrl}/:id`, auth, groupController.deleteGroup)
router.post(`${baseUrl}/`, auth, groupController.createGroup)

module.exports = router
