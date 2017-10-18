const success = require('./successHandler')
const error = require('./errorHandler')

module.exports = Object.assign({}, success, {error})
