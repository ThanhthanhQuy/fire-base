const functions = require('firebase-functions')
const createUser = require('./createUser')
const authUser = require('./authUser')

exports.createUser = functions.https.onRequest(createUser)
exports.authUser= functions.https.onRequest(authUser)