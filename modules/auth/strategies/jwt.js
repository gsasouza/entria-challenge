const User = require('../../user').model
const {Strategy, ExtractJwt} = require('passport-jwt')

const opts = {
  jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
  secretOrKey: process.env.SECRET
}

module.exports = new Strategy(opts, async (payload, done) => {
  const user = await User.findById(payload)
  if (!user) return done(null, false)
  return done(null, user)
})
