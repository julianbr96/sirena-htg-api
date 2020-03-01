'use strict'

const Router = require('koa-router')
const router = new Router()
const accountController = require('../../controllers/private/accounts')
const baseUrl = '/api/private/accounts'
const auth = require('../../middleware/secretAuth')

router.put(`${baseUrl}/:id`, auth, accountController.modifyAccount)
router.post(`${baseUrl}/`, auth, accountController.createAccount)
router.get(`${baseUrl}/`, auth, accountController.getAllAccounts)

module.exports = router
