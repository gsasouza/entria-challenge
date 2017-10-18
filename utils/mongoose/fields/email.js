const validate = require('../validate/email')
const rules = ['basicString', 'required']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules), {validate})
