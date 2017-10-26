const passport = require('koa-passport')
const User = require('../user').model
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET

const jwtStrategy = require('./strategies/jwt')
const usernameStrategy = require('./strategies/username')

passport.use('jwt', jwtStrategy)
passport.use('username', usernameStrategy)

passport.serializeUser((user, done) => done(null, user._id))

passport.deserializeUser((id, done) => (async () => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (error) {
    done(error)
  }
})())

const isAuthenticated = () => passport.authenticate('jwt')
const authenticate = () => passport.authenticate('username')

const generateToken = () => async (ctx, next) => {
  const { user } = ctx.state
  if (!user) ctx.state.error = {name: 'NotAuthorized'}
  else {
    const { username, name } = user
    const token = { token: `JWT ${jwt.sign({ username, name }, secret)}` }
    ctx.state.success = { type: 'loaded', data: token }
  }
  next()
}

module.exports = {middleware: passport.initialize(), isAuthenticated, authenticate, generateToken}
