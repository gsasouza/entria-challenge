module.exports = (Model) => (query = {}, select = { __v: 0 }) => Model.findOne(query).select(select).lean().exec()
