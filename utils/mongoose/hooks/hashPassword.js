const bCrypt = require('bcrypt')

const hashHook = (onAction) => {
  schema.pre(onAction, async function (next) {
    try {
      if (!this.isModified('password')) return next()
      const salt = await bCrypt.genSalt(10)
      this.password = await bCrypt.hash(this.password, salt)
      return next()
    } catch (err) {
      return next(err)
    }
  })
}
module.exports = (schema) => ['save', 'update'].forEach(action => hashHook(action))

