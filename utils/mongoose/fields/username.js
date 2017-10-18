const rules = ['basicString', 'required', 'lowercase', 'stringMaxLength-100']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
