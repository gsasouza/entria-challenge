const Factory = require('../factory')
module.exports = (request, server, requiredFields, Model) => {
  const modelName = Model.collection.collectionName
  const newModel = new Model(Factory.build(modelName))
  const create = () => require('./createTest')(request, server, requiredFields, newModel, modelName)
  const findAll = () => require('./findAllTest')(request, server, modelName)
  return {create, findAll}
}
