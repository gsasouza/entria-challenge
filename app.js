const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
global.Promise = require('bluebird')

const responseHandler = require('./middlewares').responseHandler
const userRouter = require('./modules/user').router(new Router({prefix: '/users'}))

const app = new Koa()

app.use(koaBody())

// router.get('/', async ctx => ctx.body = {teste: 'teste'})
app
  .use(userRouter.routes())

app.use(responseHandler)

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    console.log(err)
    ctx.status = err.status || 500
    ctx.body = err.message
    ctx.app.emit('error', err, ctx)
  }
})

const port = process.env.PORT | 8000
const server = module.exports = app.listen(port).on('error', (error) => console.log(error))
