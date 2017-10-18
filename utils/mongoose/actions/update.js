module.exports = (Model) => (query, user) => Model.update(query, user).exec()
