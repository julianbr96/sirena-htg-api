'use strict'

const Router = require('koa-router')
const router = new Router()
const accountController = require('../controllers/accounts')
const baseUrl = require('../config/global.json').apiEndpoints.publicAccountRoutes

router.get(`${baseUrl}/:id`, accountController.getAccountById)

module.exports = router
