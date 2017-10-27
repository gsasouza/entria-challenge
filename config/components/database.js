const mongoose = require('mongoose')
const dbUrl = process.env.DB_URL

mongoose.Promise = global.Promise
mongoose.connect(dbUrl, {useMongoClient: true})

mongoose.connection.on('connected', () => console.log(`Mongoose default connection connected to ${dbUrl}`))
mongoose.connection.on('error', (err) => console.log(`Mongoose default connection err ${err}`))
mongoose.connection.on('disconnected', () => console.log('Mongoose default connectios disconnected'))
mongoose.connection.on('open', () => console.log('Mongoose default connection is open'))

module.exports = mongoose
