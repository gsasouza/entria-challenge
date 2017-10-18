module.exports = (Model) => (query = {}) => Model.find(query).lean().exec()
