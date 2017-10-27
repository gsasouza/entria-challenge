const Factory = require('../factory')
module.exports = (request, server, requiredFields, uniqueFields, Model) => {
  const modelName = Model.modelName
  const endpoint = Model.collection.collectionName
  const obj = new Model(Factory.build(modelName))

  const create = () => require('./createTest')(request, server, requiredFields, uniqueFields, obj, modelName, endpoint, Factory)
  const findAll = () => require('./findAllTest')(request, server, endpoint)
  const findOne = () => require('./findOneTest')(request, server, endpoint, obj.toObject())
  const remove = () => require('./removeTest')(request, server, endpoint, obj)
  const update = () => require('./updateTest')(request, server, endpoint, Object.assign(obj.toObject(), Factory.build(modelName)))
  const runAll = () => {
    create()
    findAll()
    findOne()
    update()
    remove()
  }
  return {create, findAll, findOne, update, remove, runAll}
}
