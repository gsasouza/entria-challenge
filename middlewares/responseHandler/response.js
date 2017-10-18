class Response {
  constructor (status, message, optData) {
    this.status = status
    this.message = message || ''
    if (optData) this[Object.keys(optData)] = optData[Object.keys(optData)[0]]
  }
}

module.exports = Response
