const rules = ['basicString', 'enum-P,M,G,XG']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
