module.exports = (request, server, requiredFields, uniqueFields, modelName, endpoint, Factory, Model) => {
  const newModel = new Model(Factory.build(modelName))
  describe('Create', () => {
    test('Should create', async() => {
      const response = await request(server).post(`/api/${endpoint}`).send(newModel)
      await expect(response.statusCode).toBe(201)
    })
    requiredFields.forEach((field) => {
      test(`Should not create with empty ${field}`, async() => {
        const response = await request(server).post(`/api/${endpoint}`).send(Object.assign({}, newModel, {[field]: null}))
        await expect(response.statusCode).toBe(401)
      })
    })
    uniqueFields.forEach((field, index) => {
      test(`Should not create with an existent ${field}`, async () => {
        const obj = Object.assign(Factory.build(modelName), { [field]: newModel[field] })
        const response = await request(server).post(`/api/${endpoint}`).send(obj)
        await expect(response.statusCode).toBe(409)
      })
    })
  })
}
