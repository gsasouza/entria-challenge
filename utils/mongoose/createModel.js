const Schema = require('./createSchema')

module.exports = (mongoose) => class Model {
  constructor (name, fields, hooks = []) {
    if (!name || !fields ) throw new Error('Name(String) and Fields(Array<String>) is required')
    const schema = Schema(mongoose, fields, hooks)
    hooks.forEach((hook) => require(`./hooks/${hook}`))
    return mongoose.model(name, schema)
  }
}
