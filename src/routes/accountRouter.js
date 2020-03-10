'use strict'

const Router = require('koa-router')
const router = new Router()
const accountController = require('../controllers/accounts')
const errorHandler = require('../middleware/errorHandler')
const baseUrl = require('../config/global.json').apiEndpoints.publicAccountRoutes

router.get(`${baseUrl}/:id`, errorHandler, accountController.getAccountById)

module.exports = router
