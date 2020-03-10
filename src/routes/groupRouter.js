'use strict'

const Router = require('koa-router')
const router = new Router()
const groupController = require('../controllers/groups')
const errorHandler = require('../middleware/errorHandler')
const baseUrl = require('../config/global.json').apiEndpoints.publicGroupRoutes

router.get(`${baseUrl}/:id`, errorHandler, groupController.getGroupById)
router.get(`${baseUrl}/`, errorHandler, groupController.getAllGroups)

module.exports = router
