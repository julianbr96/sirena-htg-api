'use strict'

const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const profileTypesValues = require('../config/global.json').accountProfileTypeValues
const profileTypes = {
  values: profileTypesValues,
  message: `Only profile types available are: ${profileTypesValues}`
}

const schema = new mongoose.Schema(
  {
    name: { type: String, unique: true, required: true },
    enabled: { type: Boolean, default: true },
    countryCode: String,
    profileType: {
      type: String,
      enum: profileTypes
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
