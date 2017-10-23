module.exports = (Model) => (query = {_id: 0}) => Model.findOneAndRemove(query).lean().exec()
