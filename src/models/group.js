'use strict'

const mongoose = require('mongoose')

const groupLanguagesValues = require('../config/global.json').languagesValues
const groupLanguages = {
  values: groupLanguagesValues,
  message: `Only languages available are: ${groupLanguagesValues}`
}

const groupTypesValues = require('../config/global.json').groupTypesValues
const groupTypes = {
  values: groupTypesValues,
  message: `Only group types available are: ${groupTypesValues}`
}

const groupIndustryValues = require('../config/global.json').groupIndustryValues
const groupIndustry = {
  values: groupIndustryValues,
  message: `Only industry types available are: ${groupIndustryValues}`
}

const schema = mongoose.Schema(
  {
    account: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'account',
      required: true
    },
    parent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'group',
      default: null
    },
    ancestors: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'group'
      }
    ],
    name: { type: String, required: true },
    countryCode: { type: String, required: true },
    phone: {
      type: String,
      required: true,
      trim: true
    },
    language: {
      type: String,
      enum: groupLanguages
    },
    type: [
      {
        type: String,
        required: true,
        enum: groupTypes
      }
    ],
    industry: [
      {
        type: String,
        required: true,
        enum: groupIndustry
      }
    ],
    enabled: {
      type: Boolean,
      default: true
    },
    plan: {
      type: String,
      default: ''
    },
    freeUsers: {
      type: Number,
      default: 0
    }
  },
  {
    collection: 'groups',
    timestamps: true,
    retainKeyOrder: true
  }
)

schema.path('phone').validate(function (v, fn) {
  return v.match(/^\+(?:[0-9] ?){6,14}[0-9]$/)
}, 'Invalid phone number')

module.exports = mongoose.model('group', schema)
