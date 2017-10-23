const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
global.Promise = require('bluebird')

const responseHandler = require('./middlewares').responseHandler
const userRouter = require('./modules/user').router(new Router({prefix: '/users'}))

const app = new Koa()

app.use(koaBody())

app
  .use(userRouter.routes())

app.use(responseHandler)

const port = process.env.PORT | 8000
module.exports = app.listen(port).on('error', (error) => console.log(error))
