'use strict'
const Koa = require('koa')
const bodyParser = require('koa-parser')
const router = require('./routes')

const app = new Koa()

const MONGO_URI =
  process.env.MONGO_URI || 'mongodb://localhost/sirena-htg-local'
const mongoose = require('mongoose')

mongoose
  .connect(MONGO_URI, function () {
    console.log('Connected to MongoDB')
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!')
  })
  .catch(error => {
    console.log('Unable to connect to MongoDB Atlas!')
    console.error(error)
  })

app.use(bodyParser())
app.use(router.rootRouter.routes())

module.exports = app
