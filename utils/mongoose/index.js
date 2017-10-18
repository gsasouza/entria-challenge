const Model = require('./createModel')(require('../../config').mongoose)
const Actions = require('./actions')

module.exports = {Model, Actions}
