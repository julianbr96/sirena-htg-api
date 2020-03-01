'use strict'

const rootRouter = require('./rootRouter')
const userRouter = require('./userRouter')
const privateAccountRouter = require('./private/accountRouter')
const publicAccountRouter = require('./accountRouter')
const privateGroupRouter = require('./private/groupRouter')
const publicGroupRouter = require('./groupRouter')

module.exports = {
  rootRouter,
  userRouter,
  privateAccountRouter,
  publicAccountRouter,
  privateGroupRouter,
  publicGroupRouter
}
