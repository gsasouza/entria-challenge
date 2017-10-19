const random = require('./fieldGenerators')

module.exports = (Factory) => {
  Factory.define('users')
    .attr('username', random.string())
    .attr('password', random.string())
    .attr('name', random.string())
    .attr('email', random.email())
}
