const mongoose = require('../../config').mongoose
const Model = require('./createModel')(mongoose)
const Actions = require('./actions')

module.exports = { Model, Actions }
