module.exports = (mongoose, fields) => new mongoose.Schema(require('./schema')(fields))
