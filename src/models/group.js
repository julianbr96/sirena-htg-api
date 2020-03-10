'use strict'

const mongoose = require('mongoose')
const Account = require('./account')

const groupLanguagesValues = require('../config/global.json').languagesValues
const groupLanguages = {
  values: Object.values(groupLanguagesValues),
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
    name: { type: String, required: true },
    countryCode: { type: String, required: true },
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
    }
  },
  {
    collection: 'groups',
    timestamps: true,
    retainKeyOrder: true
  }
)

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

schema.path('parent').validate(async function (v, fn) {
  try {
    if (!v) return true
    const group = await groupModel.findById(v)
    if (group) return true
    else return false
  } catch (error) {
    console.log(error)
    return false
  }
}, 'group id does not match any existent group')

const groupModel = mongoose.model('group', schema)

module.exports = groupModel
