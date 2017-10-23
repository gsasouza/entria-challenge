const mongoose = require('../../config').mongoose
const Model = require('./createModel')(mongoose)
const Actions = require('./actions')
const validateId = require('./validateId')(mongoose)

module.exports = {Model, Actions, validateId}
