const User = require('../../user').model
const {Strategy, ExtractJwt} = require('passport-jwt')

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.SECRET
}

module.exports = new Strategy(opts, async (payload, done) => {
  try {
    const user = await User.findOne({ _id: payload._id })
    if (!user) await done(null, false)
    await done(null, user)
  } catch (err) {
    await done(err)
  }
})
