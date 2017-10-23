const rules = ['basicString', 'required', 'lowercase', 'stringMaxLength-100', 'unique']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
