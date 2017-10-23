module.exports = (Model) => async (query, newDoc, blockedProperties) => {
  blockedProperties.forEach(prop => delete newDoc[prop])
  return Model.findOne(query, (err, doc) => {
    if (err) return err
    if (!doc) return
    return Object.assign(doc, newDoc).save()
  })
}
