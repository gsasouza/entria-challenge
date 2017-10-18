const CONFIG_TYPES_MONGOOSE = './properties/'

const requireRuleWithParams = (rule) => {
  const [fn,
    ...values] = rule.split('-')
  return require(CONFIG_TYPES_MONGOOSE + fn)(...values)
}

const usingRules = (rule) => (rule.includes('-'))
  ? requireRuleWithParams(rule)
  : require(CONFIG_TYPES_MONGOOSE + rule)

const createFieldWith = (rules) => rules.map(usingRules)

module.exports = createFieldWith
