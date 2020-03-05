'use strict'

const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const Account = require('./account')
const Group = require('./group')

const userRolesValues = require('../config/global.json').userRolesValues
const userRoles = { values: userRolesValues, message: `Only roles available are: ${userRolesValues}` }

const userLanguagesValues = require('../config/global.json').languagesValues
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
    password: {
      type: String,
      select: false,
      required: true
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

schema.method('comparePassword', function comparPassword (password) {
  return this.password && bcrypt.compareSync(password, this.password)
})

schema.path('userName').validate(function (v, fn) {
  return v.match(/^.+@[^\.].*\.[a-z]{2,}$/)
}, 'userName does not match Email Format')

schema.path('phone').validate(function (v, fn) {
  return v.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)
}, 'Invalid phone number')

schema.path('account').validate(async function (v, fn) {
  try {
    const account = await Account.findById(v)
    if (account) return true
    else return false
  } catch (error) {
    console.log(error)
    return false
  }
}, 'account id does not match any existent account')

schema.path('group').validate(async function (v, fn) {
  try {
    const group = await Group.findById(v)
    if (group) return true
    else return false
  } catch (error) {
    console.log(error)
    return false
  }
}, 'group id does not match any existent account')

module.exports = mongoose.model('user', schema)
