module.exports = (value) => {
  const values = value.split(',')
  return {
    'enum': {
      values,
      message: '{VALUE} is not a valide {PATH}'
    }
  }
}
