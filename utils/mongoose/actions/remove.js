module.exports = (Model) => (query = {}) => Model.findOneAndRemove(query).lean().exec()
