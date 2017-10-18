const rules = ['basicDate', 'required']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
