const { lstatSync, readdirSync } = require('fs')
const { join, sep } = require('path')
const { isAuthenticated } = require('../../modules/auth').passport
const modulesPath = join(__dirname, '../../modules/')

const isDirectory = source => lstatSync(source).isDirectory()

const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

module.exports = (Router) => {
  const apiRouter = new Router({prefix: '/api'})
  const modules = getDirectories(modulesPath)

  modules.forEach((module) => {
    const moduleName = module.split(sep).slice(-1).pop()
    const router = require(`${module}/router`)(new Router({prefix: moduleName}))
    if (moduleName !== 'auth' && process.env.NODE_ENV !== 'test') {
      router.use(isAuthenticated())
    }
    apiRouter.use('/', router.routes(), router.allowedMethods())
  })
  return apiRouter
}
