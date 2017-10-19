const randomString = require('./randomString')

module.exports = () => `${randomString()}@${randomString(5)}.com`
