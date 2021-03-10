const app = require('firebase')
// const authUser = require('../auth/authUser')
const email = 'some12@gmail.com'
const password = '123456'

const createUser = async (req, res) => {
    try {
        const newDoc = {
            country: 'USA',
            name: 'Ha',
        }
        const user = await app.auth().signInWithEmailAndPassword(email, password)

        if(user) {
            await app.firestore().collection('users').doc(user.user.uid).set(newDoc) // auto doc nam id
            res.send(`Add ${newDoc.name} successful`)
        }

    }
    catch (e) {
        throw e
    }
}
module.exports = createUser