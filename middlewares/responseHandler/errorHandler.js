const Response = require('./response')

function mongoError (ctx, error) {
  if (error.code === 11000) return alreadyRegistered(ctx)
  else return unexpected(ctx, error)
}

function unexpected (ctx, error) {
  ctx.status = 500
  const message = 'Unexpected Error'
  ctx.body = new Response(500, message, error)
}

function alreadyRegistered (ctx) {
  ctx.status = 409
  ctx.body = new Response(409, 'Already registered')
}

function notFound (ctx) {
  ctx.status = 404
  ctx.body = new Response(404, 'Not found')
}

function validation (ctx, errors) {
  const description = []
  Object.keys(errors).forEach(key => description.push(errors[key].message))
  ctx.status = 401
  ctx.body = new Response(401, 'Validation Error', {errors: description})
}

function invalidPassword (ctx) {
  ctx.status = 400
  ctx.body = new Response(400, 'Invalid Password')
}

function notAuthorized (ctx) {
  ctx.status = 401
  ctx.body = new Response(401, 'Not Authorized')
}

module.exports = function (ctx, error) {
  switch (error.name){
    case 'MongoError': return mongoError(ctx, error)
    case 'NotFound': return notFound(ctx, error)
    case 'ValidationError': return validation(ctx, error.errors)
    case 'InvalidCnpj':
      error.errors = {'InvalidCnpj': { message: 'cnpj filled in form is invalid'}}
      return validation(ctx, error.errors)
    case 'InvalidCa':
      error.errors = { 'InvalidCa': { message: 'caNumber filled in form is invalid' } }
      return validation(ctx, error.errors)
    case 'InvalidPassword': return invalidPassword(ctx, error)
    case 'NotAuthorized': return notAuthorized(ctx, error)
    default: return unexpected(ctx, error)
  }
}
