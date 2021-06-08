
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./civic-api.cjs.production.min.js')
} else {
  module.exports = require('./civic-api.cjs.development.js')
}
