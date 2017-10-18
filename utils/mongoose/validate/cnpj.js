const unmasker = require('./unmaskNumbers')

const NOT = (x) => !x
const getR = (t) => (t) >= 2
  ? 11 - t
  : 0
const getS = (numCnpj) => numCnpj.length - 2
const getP = (p) => (p < 2
  ? 9
  : p)
const isRepeatingChars = (str) => str
  .split('')
  .every((elem) => elem === str[0])

const isValidDigits = (digits, DV) => (String(digits[0]) === String(DV[0])) && (String(digits[1]) === String(DV[1]))

const getData = (numCnpj, s) => [
  numCnpj.substr(0, s),
  0,
  s - 7
]

const getSomeData = (t, b, s, p, i) => [
  t + (b.charAt(s - i) * p),
  getP(--p)
]

const getValidationDigit = (numCnpj) => [
  getDigit(numCnpj),
  getDigit(numCnpj, 'second')
]

const getDigit = (numCnpj, second = false) => {

  let s = (!second)
    ? getS(numCnpj)
    : getS(numCnpj) + 1
  let [b,
    t,
    p] = getData(numCnpj, s)

  for (let i = s; i > 0; i--) {
    [t, p] = getSomeData(t, b, s, p, i)
  }

  return getR(t % 11)
}

const isInvalidCNPJ = (numCnpj) => (numCnpj.length !== 14 || isRepeatingChars(numCnpj))

const validateCnpj = (DV, digits = []) => (digits.length === 2) && isValidDigits(digits, DV)

const isValidCNPJ = (numCnpj) => validateCnpj(numCnpj.substr(getS(numCnpj)), getValidationDigit(numCnpj))

const testCNPJ = (numCnpj) => NOT(isInvalidCNPJ(numCnpj)) && isValidCNPJ(numCnpj)

const validate = (cnpj) => testCNPJ(unmasker(cnpj))

module.exports = [validate, '{VALUE} is not a valid {PATH}']
