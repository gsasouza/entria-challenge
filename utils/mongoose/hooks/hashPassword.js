const bCrypt = require('bcrypt')
module.exports = (schema) => {
  schema.pre('save', async function (next) {
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
