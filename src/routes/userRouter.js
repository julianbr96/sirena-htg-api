'use strict'

const Router = require('koa-router')
const router = new Router()
const userController = require('../controllers/users')
const hashPassword = require('../middleware/hashPassword')
const errorHandler = require('../middleware/errorHandler')
const baseUrl = require('../config/global.json').apiEndpoints.userRoutes

router.get(`${baseUrl}/:id`, errorHandler, userController.getUserById)
router.put(`${baseUrl}/:id`, errorHandler, hashPassword, userController.modifyUser)
router.delete(`${baseUrl}/:id`, errorHandler, userController.deleteUser)
router.post(`${baseUrl}/`, errorHandler, hashPassword, userController.createUser)
router.get(`${baseUrl}/`, errorHandler, userController.getAllUsers)

module.exports = router
