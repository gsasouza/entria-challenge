module.exports = [
  (value) => {
    const regex = /^[0-9]{5}[0-9]{3}$/
    return regex.test(value)
  },
  '{VALUE} is not a valid {PATH}'
]
