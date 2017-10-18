const validate = require('../validate/number')
const rules = ['basicString', 'required']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules), {validate})
