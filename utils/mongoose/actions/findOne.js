module.exports = (Model) => (query = {}) => Model.findOne(query).lean().exec()
