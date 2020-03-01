'use strict'

const rootRouter = require('./rootRouter')
const userRouter = require('./userRouter')
const privateAccountRouter = require('./private/accountRouter')
const publicAccountRouter = require('./accountRouter')

module.exports = {
  rootRouter,
  userRouter,
  privateAccountRouter,
  publicAccountRouter
}
