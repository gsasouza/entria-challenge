const request = require('supertest')
const server = require('../../app')

describe('First test', () => {
  test('Should get an empty array', async () => {
    const response = await request(server).get('/users')
    expect(response.statusCode).toBe(200)
  })
})
