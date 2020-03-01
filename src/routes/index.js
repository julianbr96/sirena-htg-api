'use strict'

const rootRouter = require('./rootRouter')
const userRouter = require('./userRouter')
const accountRouter = require('./private/accountRouter')

module.exports = { rootRouter, userRouter, accountRouter }
