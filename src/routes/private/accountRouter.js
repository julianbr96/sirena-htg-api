'use strict'

const Router = require('koa-router')
const router = new Router()
const accountController = require('../../controllers/private/accounts')
const baseUrl = require('../../config/global.json').apiEndpoints.privateAccountRoutes
const auth = require('../../middleware/secretAuth')
const errorHandler = require('../../middleware/errorHandler')

router.put(`${baseUrl}/:id`, errorHandler, auth, accountController.modifyAccount)
router.delete(`${baseUrl}/:id`, errorHandler, auth, accountController.deleteAccount)
router.post(`${baseUrl}/`, errorHandler, auth, accountController.createAccount)
router.get(`${baseUrl}/`, errorHandler, auth, accountController.getAllAccounts)

module.exports = router
