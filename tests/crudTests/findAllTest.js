module.exports = (request, server, modelName) => {
  describe('Find All', () => {
    test('Should find', async() => {
      const response = await request(server).get(`/${modelName}`)
      expect(response.statusCode).toBe(200)
      expect(response.body.data).toHaveLength(1)
    })
  })
}
