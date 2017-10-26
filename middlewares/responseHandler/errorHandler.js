const Response = require('./response')

function mongoError (ctx, error) {
  if (error.code === 11000) return alreadyRegistered(ctx)
  else return unexpected(ctx, error)
}

function unexpected (ctx, error) {
  console.log(error)
  ctx.status = 500
  const message = 'Unexpected Error'
  ctx.body = new Response(500, message, {error})
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
  const description = Object.keys(errors).map(key => errors[key].message)
  ctx.status = 401
  ctx.body = new Response(401, 'Validation Error', {errors: description})
}

function invalidLogin (ctx) {
  ctx.status = 400
  ctx.body = new Response(400, 'Login data doesnt match')
}

function notAuthorized (ctx) {
  ctx.status = 401
  ctx.body = new Response(401, 'Not Authorized')
}

module.exports = function (ctx, error) {
  switch (error.name) {
    case 'MongoError': return mongoError(ctx, error)
    case 'NotFound': return notFound(ctx, error)
    case 'ValidationError': return validation(ctx, error.errors)
    case 'InvalidPassword': return invalidLogin(ctx, error)
    case 'NotAuthorized': return notAuthorized(ctx, error)
    default: return unexpected(ctx, error)
  }
}
