const mongoose = require('../../utils').mongoose

const fields = ['username', 'password', 'name', 'email', 'createdAt']

module.exports = new mongoose.Model('User', fields)
