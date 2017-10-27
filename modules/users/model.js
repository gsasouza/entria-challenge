const mongoose = require('../../utils').mongoose

const fields = ['username', 'password', 'name', 'email', 'createdAt']
const hooks = ['hashPassword']
const methods = ['comparePassword']

module.exports = new mongoose.Model('User', fields, hooks, methods)
