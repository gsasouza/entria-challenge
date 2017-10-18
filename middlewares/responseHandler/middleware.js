const handler = require('./handler')

module.exports = async (ctx, next) => {
  if (ctx.state.error) return handler.error(ctx, ctx.state.error)
  if (ctx.state.sucess) return handler[ctx.state.success.type](ctx, ctx.state.success.data)
  next()
}
