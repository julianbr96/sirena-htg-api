'use strict'

const Router = require('koa-router')
const router = new Router()
const groupController = require('../../controllers/private/groups')
const baseUrl = require('../../config/global.json').apiEndpoints.privateGroupRoutes
const auth = require('../../middleware/secretAuth')
const errorHandler = require('../../middleware/errorHandler')

router.put(`${baseUrl}/:id`, errorHandler, auth, groupController.modifyGroup)
router.delete(`${baseUrl}/:id`, errorHandler, auth, groupController.deleteGroup)
router.post(`${baseUrl}/`, errorHandler, auth, groupController.createGroup)

module.exports = router
