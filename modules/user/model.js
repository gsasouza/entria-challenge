const mongoose = require('../../utils').mongoose

const fields = ['username', 'password', 'name', 'email', 'createdAt']
const hooks = ['hashPassword']
module.exports = new mongoose.Model('User', fields, hooks)
