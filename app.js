require('dotenv').config()
const Koa = require('koa')
const Router = require('koa-router')
const koaBody = require('koa-body')
const passport = require('./modules/auth').passport
const routerMiddleware = require('./middlewares/router')(Router)
const responseHandler = require('./middlewares').responseHandler
global.Promise = require('bluebird')

const port = process.env.PORT | 8080
const app = new Koa()

app.use(koaBody())

app.use(passport.middleware)
app.use(routerMiddleware.routes())
app.use(responseHandler)

module.exports = app.listen(port).on('error', (error) => console.log(error))
