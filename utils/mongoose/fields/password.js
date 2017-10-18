const rules = ['basicString', 'required', 'stringMaxLength-50']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
