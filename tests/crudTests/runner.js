const Factory = require('../factory')
module.exports = async (request, server, requiredFields, uniqueFields, Model) => {
  const modelName = Model.modelName
  const endpoint = Model.collection.collectionName
  const setup = () => require('./setup.js')(obj)
  const create = () => require('./createTest')(request, server, requiredFields, uniqueFields, modelName, endpoint, Factory, Model)
  const findAll = () => require('./findAllTest')(request, server, endpoint)
  const findOne = () => require('./findOneTest')(request, server, endpoint, obj.toObject())
  const remove = () => require('./removeTest')(request, server, endpoint, obj)
  const update = () => require('./updateTest')(request, server, endpoint, Object.assign(obj.toObject(), Factory.build(modelName)))
  const runAll = () => {
    setup()
    create()
    findAll()
    findOne()
    update()
    remove()
  }
  return { create, findAll, findOne, update, remove, runAll }
}
