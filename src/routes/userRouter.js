'use strict'

const Router = require('koa-router')
const router = new Router()
const userController = require('../controllers/users')
const hashPassword = require('../middleware/hashPassword')
const baseUrl = require('../config/global.json').apiEndpoints.userRoutes

router.get(`${baseUrl}/:id`, userController.getUserById)
router.put(`${baseUrl}/:id`, hashPassword, userController.modifyUser)
router.delete(`${baseUrl}/:id`, userController.deleteUser)
router.post(`${baseUrl}/`, hashPassword, userController.createUser)
router.get(`${baseUrl}/`, userController.getAllUsers)

module.exports = router
