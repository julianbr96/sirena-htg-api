'use strict'

const Koa = require('koa')
const bodyParser = require('koa-parser')
const router = require('./routes')
const config = require('./config/global.json')
const app = new Koa()

const MONGO_URI = config.MONGO_URI
const mongoose = require('mongoose')

connectDb()

app.use(bodyParser())
app.use(router.rootRouter.routes())
app.use(router.userRouter.routes())
app.use(router.privateAccountRouter.routes())
app.use(router.publicAccountRouter.routes())
app.use(router.privateGroupRouter.routes())
app.use(router.privateGroupRouter.routes())

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
