module.exports = (request, server, requiredFields, newModel, modelName) => {
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
  })
}