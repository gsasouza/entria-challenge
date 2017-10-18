const rules = [
  'basicString',
  'required',
  'enum-AC,AL,AP,AM,BA,CE,DF,ES,GO,MA,MT,MS,MG,PA,PB,PR,PE,PI,RJ,RN,RS,RO,RR,SC,SP,SE,TO'
]
module.exports = Object.assign({}, ...require('../createFieldWithRules')(rules))
