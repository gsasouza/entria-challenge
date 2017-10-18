const validate = require('../validate/cnpj')
const rules = ['basicString', 'required']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules), {validate})
