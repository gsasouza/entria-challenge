const Response = require('./response')

function loaded (ctx, data) {
  ctx.status(200)
  ctx.body = new Response(200, 'Successfully loaded', data)
}

function created (ctx) {
  ctx.status(201)
  ctx.body = new Response(201, 'Successfully created')
}

function updated (ctx) {
  ctx.status(200)
  ctx.body = new Response(200, 'Successfully updated')
}

function removed (ctx) {
  ctx.status(200)
  ctx.body = new Response(200, 'Successfully removed')
}

function custom (ctx, message, optData) {
  ctx.status(200)
  ctx.body = new Response(200, message, optData)
}

module.exports = {loaded, created, updated, removed, custom}