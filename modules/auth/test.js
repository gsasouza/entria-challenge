const request = require('supertest')
const server = require('../../app')
const User = require('../users').model
const Factory = require('../../tests/factory')

describe('Auth', () => {
  const newUser = new User(Factory.build('User'))
  const { username, password } = newUser
  test('Should register', async () => {
    const response = await request(server).post('/api/auth/register').send(newUser)
    expect(response.statusCode).toBe(201)
  })
  test('Should login', async () => {
    const response = await request(server).post('/api/auth/login').send({ username, password })
    expect(response.statusCode).toBe(200)
    expect(response.body.data).toHaveProperty('token')
  })
  test('Should not login with invalid credentials', async () => {
    const response = await request(server).post('/api/auth/login').send({ username, password: '000'})
    expect(response.statusCode).toBe(401)
  })
})
