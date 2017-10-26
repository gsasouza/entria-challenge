const bCrypt = require('bcrypt')
module.exports = (schema) => {
  schema.methods.comparePassword = function (password) {
    return new Promise((resolve, reject) => {
      bCrypt.compare(password, this.password, (err, res) => {
        if (err) reject(err)
        if (!res) resolve(false)
        if (res) resolve(this)
      })
    })
  }
}
