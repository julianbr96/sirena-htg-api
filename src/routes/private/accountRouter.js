'use strict'

const Router = require('koa-router')
const router = new Router()
const accountController = require('../../controllers/private/accounts')
const baseUrl = '/api/private/accounts'
const auth = require('../../middleware/secretAuth')

// router.get(`${baseUrl}/`, accountController.getAllAccounts)
// router.get(`${baseUrl}/:id`, accountController.getAccountById)
// router.put(`${baseUrl}/:id`, accountController.modifyAccount)
router.post(`${baseUrl}/`, auth, accountController.createAccount)

module.exports = router
