'use strict'

const mongoose = require('mongoose')

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
      required: true
    },
    language: {
      type: String,
      enum: ['es', 'pt', 'en']
    },
    type: [
      {
        type: String,
        required: true,
        enum: ['oem', 'group', 'store', 'leadProvider']
      }
    ],
    industry: [
      {
        type: String,
        required: true,
        enum: ['vehicle', 'insurance', 'savingPlan', 'realEstate', 'retail']
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

module.exports = mongoose.model('group', schema)
