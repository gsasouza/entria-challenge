const rules = ['basicString', 'stringMaxLength-100']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
