module.exports = (request, server, modelName, obj) => {
  describe('Remove', () => {
    test('Should remove', async () => {
      const response = await request(server).delete(`/${modelName}/${obj._id}`)
      expect(response.statusCode).toBe(200)
    })
    test('Should not remove with invalid id', async () => {
      const response = await request(server).delete(`/${modelName}/59ea2376abf50718f0afaea3`)
      expect(response.statusCode).toBe(404)
    })
  })
}
