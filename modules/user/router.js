const controller = require('./controller')

module.exports = (router) => {
  router
    .get('/', controller.findAll)
    .post('/', controller.create)
  
  router
    .get('/:_id', controller.findOne)
    .put('/:_id', controller.create)
    .delete('/:_id', controller.remove)

  return router
}
