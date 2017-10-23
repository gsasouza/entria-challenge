module.exports = (Model) => async (query, newDoc, blockedProperties) => {
  blockedProperties.forEach(prop => delete newDoc[prop])
  return Model.findOne(query, (err, doc) => {
    if (err) return err
    if (!doc) {
      const e = new Error()
      e.name = 'NotFound'
      return e
    }
    return Object.assign(doc, newDoc).save()
  })
}
