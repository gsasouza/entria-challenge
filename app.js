const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')

const responseHandler = require('./middlewares').responseHandler
const userRouter = require('./modules/user').router(router)

const app = new Koa()

app.use(koaBody())

router.get('/', async ctx => ctx.body = 'test')
app
  .use(userRouter.routes())
  .use(userRouter.allowedMethods())

app.use(responseHandler)

const port = process.env.PORT | 8080
module.exports = app.listen(port).on('error', (error) => {})
