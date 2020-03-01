'use strict'

const Router = require('koa-router')
const router = new Router()
const userController = require('../controllers/users')
const baseUrl = '/api/users'

// router.get(`${baseUrl}/`, userController.getAllUsers)
// router.get(`${baseUrl}/:id`, userController.getUserById)
// router.put(`${baseUrl}/:id`, userController.modifyUser)
// router.delete(`${baseUrl}/:id`, userController.deleteUser)
router.post(`${baseUrl}/`, userController.createUser)

module.exports = router
