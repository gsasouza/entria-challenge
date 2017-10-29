module.exports = (obj) => {
  describe('Setup', () => {
    test('Should create', async () => {
      const response = await obj.save()
      expect(response.statusCode).toBe(200)
    })
  })
}
