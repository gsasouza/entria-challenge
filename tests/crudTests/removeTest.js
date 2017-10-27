module.exports = (request, server, endpoint, obj) => {
  describe('Remove', () => {
    test('Should remove', async () => {
      const response = await request(server).delete(`/api/${endpoint}/${obj._id}`)
      expect(response.statusCode).toBe(200)
    })
    test('Should not remove with invalid id', async () => {
      const response = await request(server).delete(`/api/${endpoint}/59ea2376abf50718f0afaea3`)
      expect(response.statusCode).toBe(404)
    })
  })
}
