module.exports = (request, server, endpoint) => {
  describe('Find All', () => {
    test('Should find', async() => {
      const response = await request(server).get(`/api/${endpoint}`)
      await expect(response.statusCode).toBe(200)
    })
  })
}
