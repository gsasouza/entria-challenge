module.exports = (request, server, endpoint, obj) => {
  describe('Find one', () => {
    test('Should find', async() => {
      const response = await request(server).get(`/api/${endpoint}/${obj._id}`)
      await expect(response.statusCode).toBe(200)
    })
    test('Should not find', async () => {
      const response = await request(server).get(`/api/${endpoint}/59ea2376abf50718f0afaea3`)
      await expect(response.statusCode).toBe(404)
    })
  })
}
