'use strict'

const Router = require('koa-router')
const router = new Router()
const groupController = require('../controllers/groups')
const baseUrl = require('../config/global.json').apiEndpoints.publicGroupRoutes

router.get(`${baseUrl}/:id`, groupController.getGroupById)
router.get(`${baseUrl}/`, groupController.getAllGroups)

module.exports = router
