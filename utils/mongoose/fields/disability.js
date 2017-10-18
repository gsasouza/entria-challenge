const rules = ['arrayString']
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
