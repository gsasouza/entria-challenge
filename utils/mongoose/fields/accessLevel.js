const rules = ['basicString', 'required', 'lowercase', 'default-user_tec']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
