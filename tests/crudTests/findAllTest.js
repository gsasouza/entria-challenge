module.exports = (request, server, modelName) => {
  describe('Find All', () => {
    test('Should find', async() => {
      const response = await request(server).get(`/api/${modelName}`)
      expect(response.statusCode).toBe(200)
    })
  })
}
