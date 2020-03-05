'use strict'

const Router = require('koa-router')
const router = new Router()
const accountController = require('../../controllers/private/accounts')
const baseUrl = require('../../config/global.json').apiEndpoints.privateAccountRoutes
const auth = require('../../middleware/secretAuth')

router.put(`${baseUrl}/:id`, auth, accountController.modifyAccount)
router.delete(`${baseUrl}/:id`, auth, accountController.deleteAccount)
router.post(`${baseUrl}/`, auth, accountController.createAccount)
router.get(`${baseUrl}/`, auth, accountController.getAllAccounts)

module.exports = router
