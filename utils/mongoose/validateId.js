module.exports = (mongoose) => (id) => mongoose.Types.ObjectId.isValid(id)
