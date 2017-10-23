const request = require('supertest')
const server = require('../../app')
const model = require('./model')
const crudTests = require('../../tests/crudTests')(request, server, ['username', 'password', 'name', 'email'], model)

describe('User', () => {
  crudTests.runAll()
})
