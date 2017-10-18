const handler = require('./handler')

module.exports = async (ctx, next) => {
  if (ctx.state.error) return handler.error(ctx, ctx.state.error)
  if (ctx.state.success) return handler[ctx.state.success.type](ctx, ctx.state.success.data)
  next()
}
