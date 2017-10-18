const Schema = require('./createSchema')

module.exports = (mongoose) => class Model {
  constructor (name, fields, hooks) {
    if (!name || !fields ) throw new Error('Name(String) and Fields(Array<String>) is required')
    return mongoose.model(name, Schema(mongoose, fields, hooks))
  }
}