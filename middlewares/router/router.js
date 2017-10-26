const { lstatSync, readdirSync } = require('fs')
const { join } = require('path')
const { isAuthenticated } = require('../../modules/auth').passport
const modulesPath = `${__dirname}../../../modules/`

const isDirectory = source => lstatSync(source).isDirectory()

const getDirectories = source =>
  readdirSync(source).map(name => join(source, name)).filter(isDirectory)

module.exports = (Router) => {
  const apiRouter = new Router({prefix: '/api'})
  const modules = getDirectories(modulesPath)

  modules.forEach((module) => {
    const moduleName = module.split('\\').pop()
    const router = require(`${module}/router`)(new Router({prefix: moduleName}))
    if (moduleName !== 'auth') {
      router.use(isAuthenticated())
    }
    apiRouter.use('/', router.routes(), router.allowedMethods())
  })
  return apiRouter
}
