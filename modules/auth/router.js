const { authenticate, generateToken } = require('./passport')
const { create } = require('../users').controller

module.exports = (router) => {
  router.post('/login', authenticate(), generateToken())
  router.post('/register', create)
  return router
}
