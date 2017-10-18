const Koa = require('koa')
const router = require('koa-router')()
const koaBody = require('koa-body')

const responseHandler = require('./middlewares').responseHandler
const userRouter = require('./modules/user').router(router)

const app = module.exports = new Koa()

app.use(koaBody())

app
  .use(userRouter.routes())
  .use(userRouter.allowedMethods())

app.use(responseHandler)

const port = process.env.PORT | 8080
app.listen(port)
