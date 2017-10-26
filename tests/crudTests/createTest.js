module.exports = (request, server, requiredFields, uniqueFields, newModel, modelName, Factory) => {
  describe('Create', () => {
    test('Should create', async() => {
      const response = await request(server).post(`/${modelName}`).send(newModel)
      expect(response.statusCode).toBe(201)
    })
    requiredFields.forEach((field) => {
      test(`Should not create with empty ${field}`, async() => {
        const response = await request(server).post(`/${modelName}`).send(Object.assign({}, newModel, {[field]: null}))
        expect(response.statusCode).toBe(401)
      })
    })
    uniqueFields.forEach((field, index) => {
      test(`Should not create with an existent ${field}`, async () => {
        const obj = Object.assign(Factory.build(modelName), { [field]: newModel[field] })
        const response = await request(server).post(`/${modelName}`).send(obj)
        expect(response.statusCode).toBe(409)
      })
    })
  })
}
