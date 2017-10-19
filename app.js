const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')

const responseHandler = require('./middlewares').responseHandler
const userRouter = require('./modules/user').router(new Router({prefix: '/users'}))
const testRouter = require('./testRouter')(new Router({prefix: '/test'}))

const app = new Koa()

app.use(koaBody())

//router.get('/', async ctx => ctx.body = {teste: 'teste'})
app
  .use(userRouter.routes())
  .use(testRouter.routes())

app.use(responseHandler)

const port = process.env.PORT | 8080
const server = module.exports = app.listen(port).on('error', (error) => console.log(error))
