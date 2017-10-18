module.exports = class Actions {
  constructor (Model, actions) {
    if (!Model || !actions) throw new Error('Model(Mongoose.Model) and actions(Array<String>) is required')
    actions.forEach((action) => { this[action] = require(`./${action}`)(Model) })
  }
}
