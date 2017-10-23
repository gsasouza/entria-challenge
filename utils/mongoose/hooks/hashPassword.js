const bCrypt = require('bcrypt')

const hashPassword = {
  save: async function (next) {
    try {
      if (!this.isModified('password')) return next()
      const salt = await bCrypt.genSalt(10)
      this.password = await bCrypt.hash(this.password, salt)
      return next()
    } catch (err) {
      return next(err)
    }
  },
  update: async function (next) {
    try {
      let newPassword = this._update.$set.password
      if (!newPassword) return next()
      const salt = await bCrypt.genSalt(10)
      this._update.$set.password = await bCrypt.hash(newPassword, salt)
      return next()
    } catch (err) {
      return next(err)
    }
  }
}
const hashHook = (onAction, schema) => schema.pre(onAction, hashPassword[onAction])

module.exports = (schema) => ['save', 'update'].forEach(action => hashHook(action, schema))
