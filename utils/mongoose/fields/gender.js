const rules = [
  'basicString', 'required', 'enum-M,F,X'
]
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
