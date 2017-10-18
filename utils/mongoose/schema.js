const createField = (field) => ({
  [field]: require('./fields/' + field)
})

const toSchema = (obj, field) => Object.assign(obj, createField(field))

const createSchema = (fields) => fields.reduce(toSchema, {})

module.exports = (fields) => createSchema(fields)
