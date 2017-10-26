const Schema = require('./createSchema')

module.exports = (mongoose) => class Model {
  constructor (name, fields, hooks = [], methods = []) {
    if (!name || !fields) throw new Error('Name(String) and Fields(Array<String>) is required')
    const schema = Schema(mongoose, fields)
    hooks.forEach((hook) => require(`./hooks/${hook}`)(schema))
    methods.forEach((method) => require(`./methods/${method}`)(schema))
    return mongoose.model(name, schema)
  }
}
