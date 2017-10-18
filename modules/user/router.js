const controller = require('./controller')

module.exports = (router) => {
  router
    .get('/users', controller.findAll)
    .post('/users', controller.create)

  return router
}
