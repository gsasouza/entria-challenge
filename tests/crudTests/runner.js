const Factory = require('../factory')
module.exports = (request, server, requiredFields, Model) => {
  const modelName = Model.collection.collectionName
  const obj = new Model(Factory.build(modelName))

  const create = () => require('./createTest')(request, server, requiredFields, obj, modelName)
  const findAll = () => require('./findAllTest')(request, server, modelName)
  const findOne = () => require('./findOneTest')(request, server, modelName, obj.toObject())
  const remove = () => require('./removeTest')(request, server, modelName, obj)
  const update = () => require('./updateTest')(request, server, modelName, Object.assign(obj.toObject(), Factory.build(modelName)))
  const runAll = () => {
    create()
    findAll()
    findOne()
    update()
    remove()
  }
  return {create, findAll, findOne, update, remove, runAll}
}
