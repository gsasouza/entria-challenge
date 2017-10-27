const User = require('../../users').model
const CustomStrategy = require('passport-custom')

module.exports = new CustomStrategy(async (ctx, done) => {
  try {
    if (ctx.body.username && ctx.body.password) {
      const user = await User.findOne({ username: ctx.body.username.toLowerCase() })
      if (!user) done(null, false)
      const result = await user.comparePassword(ctx.body.password)
      return done(null, result)
    }
    return done(null, false)
  } catch (error) {
    done(error)
  }
})
