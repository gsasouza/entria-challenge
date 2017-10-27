module.exports = (request, server, endpoint, obj) => {
  describe('Update', () => {
    test('Should update', async () => {
      const response = await request(server).put(`/api/${endpoint}/${obj._id}`).send(obj)
      await expect(response.statusCode).toBe(200)
    })
    test('Should not update with invalid id', async () => {
      const response = await request(server).delete(`/api/${endpoint}/59ea2376abf50718f0afaea3`)
      await expect(response.statusCode).toBe(404)
    })
  })
}
