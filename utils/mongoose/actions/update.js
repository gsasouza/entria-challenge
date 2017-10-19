module.exports = (Model) => (query, doc) => Model.update(query, doc).exec()
