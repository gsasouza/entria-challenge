const validate = require(`../validate/cep`)
const rules = ['basicString', 'required']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules), {validate})
