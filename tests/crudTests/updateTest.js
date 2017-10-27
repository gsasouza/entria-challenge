module.exports = (request, server, modelName, obj) => {
  describe('Update', () => {
    test('Should update', async () => {
      const response = await request(server).put(`/api/${modelName}/${obj._id}`).send(obj)
      expect(response.statusCode).toBe(200)
    })
    test('Should not update with invalid id', async () => {
      const response = await request(server).delete(`/api/${modelName}/59ea2376abf50718f0afaea3`)
      expect(response.statusCode).toBe(404)
    })
  })
}
