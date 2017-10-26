const handler = require('./handler')

module.exports = async (ctx, next) => {
  if (ctx.state.error) await handler.error(ctx, ctx.state.error)
  if (ctx.state.success) await handler[ctx.state.success.type](ctx, ctx.state.success.data)
  await next()
}
