const rules = ['basicString', 'required', 'stringMaxLength-100']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
