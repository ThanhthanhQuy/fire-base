const config = require('./config')
const functions = require('firebase-functions')
const {createData, readData, updateData, deleteData} = require('./CRUD fireStorage')
const {createUser, authUser} = require('./auth')

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!")
})
//Auth
exports.createUser = createUser
exports.authUser = authUser

//CRUD
exports.createData = createData
exports.readData = readData
exports.updateData = updateData
exports.deleteData = deleteData