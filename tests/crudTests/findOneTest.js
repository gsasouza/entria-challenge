module.exports = (request, server, modelName, obj) => {
  describe('Find one', () => {
    test('Should find', async() => {
      const response = await request(server).get(`/${modelName}/${obj._id}`)
      expect(response.statusCode).toBe(200)
    })
    test('Should not find', async () => {
      const response = await request(server).get(`/${modelName}/59ea2376abf50718f0afaea3`)
      expect(response.statusCode).toBe(404)
    })
  })
}
