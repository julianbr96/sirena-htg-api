'use strict'

const Koa = require('koa')
const bodyParser = require('koa-parser')
const logger = require('koa-logger')
const router = require('./routes')
const config = require('./config/global.json')
const app = new Koa()
const serve = require('koa-static-server')

const MONGO_URI = config.MONGO_URI
const mongoose = require('mongoose')

connectDb()

app.use(bodyParser())
app.use(logger())

app.use(serve({ rootDir: 'doc', rootPath: '/api/doc', index: 'index.html' }))
app.use(router.rootRouter.routes())
app.use(router.userRouter.routes())
app.use(router.privateAccountRouter.routes())
app.use(router.publicAccountRouter.routes())
app.use(router.privateGroupRouter.routes())
app.use(router.publicGroupRouter.routes())

module.exports = app

async function connectDb () {
  await mongoose
    .connect(MONGO_URI)
    .then(async () => {
      console.log('Successfully connected to MongoDB Atlas!')
    })
    .catch(async (error) => {
      console.log('Unable to connect to MongoDB Atlas!')
      console.error(error)
    })
}
