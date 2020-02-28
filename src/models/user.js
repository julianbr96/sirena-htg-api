'use strict'

const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')
const BCRYPT_SALT_ROUNDS = 12

const userRoles = ['admin', 'agent', 'owner']

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
        enum: userRoles,
        required: true
      }
    ],
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'group'
    },
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'account'
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
    cellPhone: {
      type: String,
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
    timezone: { type: String, required: true },
    language: {
      type: String,
      enum: ['es', 'pt', 'en']
    }
  },
  {
    collection: 'users',
    timestamps: true,
    retainKeyOrder: true
  }
)

schema.plugin(uniqueValidator)

schema.virtual('password').set(function setPassword(password) {
  this.pwHash = bcrypt.hashSync(password, BCRYPT_SALT_ROUNDS)
})

schema.method('comparePassword', function comparPassword(password) {
  return this.pwHash && bcrypt.compareSync(password, this.pwHash)
})

module.exports = mongoose.model('User', schema)
