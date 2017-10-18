const rules = ['basicString']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
