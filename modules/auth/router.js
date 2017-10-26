const { authenticate, generateToken } = require('./passport')
const { create } = require('../user').controller

module.exports = (router) => {
  router.get('/', async (ctx) => ctx.body = 'teste')
  router.post('/login', authenticate(), generateToken())
  router.post('/register', create)
  return router
}
