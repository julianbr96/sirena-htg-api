'use strict'

const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    enabled: { type: Boolean, default: true },
    countryCode: String,
    profileType: {
      type: String,
      enum: ['customer', 'demoCustomer', 'partner', 'leadProvider']
    }
  },
  {
    collection: 'accounts',
    timestamps: true,
    retainKeyOrder: true
  }
)

schema.plugin(uniqueValidator)

module.exports = mongoose.model('account', schema)
