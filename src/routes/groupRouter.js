'use strict'

const Router = require('koa-router')
const router = new Router()
const groupController = require('../controllers/groups')
const baseUrl = '/api/groups'

router.get(`${baseUrl}/:id`, groupController.getGroupById)

module.exports = router
