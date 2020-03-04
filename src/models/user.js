'use strict'

const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const BCRYPT_SALT_ROUNDS = 12

const userRolesValues = require('../config/global.json').userRolesValues
const userRoles = { values: userRolesValues, message: `Only roles available are: ${userRolesValues}` }

const userLanguagesValues = require('../config/global.json').userLanguagesValues
const userLanguages = { values: userLanguagesValues, message: `Only languages available are: ${userLanguagesValues}` }

/***
 * @type {mongoose.Schema}
 */
const schema = mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true
    },
    roles: [
      {
        type: String,
        enum: userRoles,
        required: true
      }
    ],
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'group',
      required: true
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'account',
      required: true
    },
    nin: {
      type: String,
      trim: true
    },
    firstName: {
      type: String,
      trim: true
    },
    lastName: {
      type: String,
      trim: true
    },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    pwHash: {
      type: String,
      select: false
    },
    active: {
      type: Boolean,
      default: true
    },
    softRemoved: {
      type: Boolean,
      default: false
    },
    unlisted: {
      type: Boolean,
      default: false
    },
    available: {
      type: Boolean,
      default: true
    },
    language: {
      type: String,
      enum: userLanguages
    }
  },
  {
    collection: 'users',
    timestamps: true,
    retainKeyOrder: true
  }
)

schema.plugin(uniqueValidator)

schema.virtual('password').set(function setPassword (password) {
  this.pwHash = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS)
})

schema.method('comparePassword', function comparPassword (password) {
  return this.pwHash && bcrypt.compareSync(password, this.pwHash)
})

schema.path('userName').validate(function (v, fn) {
  return v.match(/^.+@[^\.].*\.[a-z]{2,}$/)
}, 'userName does not match Email Format')

schema.path('phone').validate(function (v, fn) {
  return v.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)
}, 'Invalid phone number')

module.exports = mongoose.model('user', schema)
