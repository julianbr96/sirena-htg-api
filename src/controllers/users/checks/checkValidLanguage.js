'use strict'

const userLanguageValues = require('../../../config/global.json').languagesValues

module.exports = (language) => {
  if (language) {
    return Object.values(userLanguageValues).includes(language)
  } else {
    return true
  }
}
