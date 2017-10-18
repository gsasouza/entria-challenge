class Response {
  constructor (status, message = '', optData = {}) {
    Object.assign(this, {status}, {message}, optData)
  }
}

module.exports = Response
