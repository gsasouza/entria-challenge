const validate = require('../validate/cpf')
const rules = ['basicString', 'required', 'unique']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules), {validate})
