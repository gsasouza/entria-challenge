const request = require('supertest')
const server = require('../../app')
const User = require('./model')
const requiredFields = ['username', 'password', 'name', 'email']
const uniqueFields = ['username']
const Factory = require('../../tests/factory')
// const crudTests = require('../../tests/crudTests')(request, server, , ['username'], User)
// console.log(crudTests)

describe('User', () => {
  const user = new User(Factory.build('User'))
  console.log(user)

  beforeAll(async () => user.save)
  // afterAll(async () => User.remove())

  describe('Create', () => {
    const newUser = Factory.build('User')
    test('Should create', async () => {
      const response = await request(server).post('/api/users').send(newUser)
      expect(response.statusCode).toBe(201)
    })
    requiredFields.forEach((field) => {
      test(`Should not create with empty ${field}`, async () => {
        const response = await request(server).post('/api/users').send(Object.assign({}, newUser, { [field]: null }))
        expect(response.statusCode).toBe(401)
      })
    })
    uniqueFields.forEach((field, index) => {
      test(`Should not create with an existent ${field}`, async () => {
        const obj = Object.assign(Factory.build('User'), { [field]: newUser[field] })
        const response = await request(server).post('/api/users').send(obj)
        expect(response.statusCode).toBe(409)
      })
    })
  })

  describe('Find All', () => {
    test('Should find', async () => {
      const response = await request(server).get('/api/users')
      expect(response.statusCode).toBe(200)
    })
  })

  describe('Find one', () => {
    test('Should find', async () => {
      console.log(user._id)
      const response = await request(server).get(`/api/users/${user._id}`)
      expect(response.statusCode).toBe(200)
    })
    test('Should not find', async () => {
      const response = await request(server).get('/api/users/59ea2376abf50718f0afaea3')
      expect(response.statusCode).toBe(404)
    })
  })

  describe('Update', () => {
    test('Should update', async () => {
      const response = await request(server).put(`/api/users/${user._id}`).send(Object.assign(user.toObject(), Factory.build('User')))
      expect(response.statusCode).toBe(200)
    })
    test('Should not update with invalid id', async () => {
      const response = await request(server).delete(`/api/users/59ea2376abf50718f0afaea3`)
      expect(response.statusCode).toBe(404)
    })
  })

  describe('Remove', () => {
    test('Should remove', async () => {
      const response = await request(server).delete(`/api/users/${user._id}`)
      expect(response.statusCode).toBe(200)
    })
    test('Should not remove with invalid id', async () => {
      const response = await request(server).delete(`/api/users/59ea2376abf50718f0afaea3`)
      expect(response.statusCode).toBe(404)
    })
  })
})
