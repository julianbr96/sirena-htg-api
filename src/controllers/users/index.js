'use strict'

const { createUser } = require('./create')
const { getAllUsers } = require('./getAllUsers')
const { getUserById } = require('./getUser')
const { modifyUser } = require('./modify')
const { deleteUser } = require('./delete')

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  modifyUser
}
