const app = require('firebase')
// const authUser = require('../auth/authUser')
const email = 'some@gmail.com'
const password = '123456'

const readUser = async (req, res) => {
    try {
        const user = await app.auth().signInWithEmailAndPassword(email, password)
        const docs = await app.firestore().collection('profiles').doc(user.user.uid).get()
        res.send(docs.data())

        //where
        // const docs = await app.firestore().collection('profiles').where("name", "==", "Quy").get() // return array
        // res.send(docs.docs.map(doc => doc.data()))
    }
    catch (e) {
        res.send(e.message)
    }
}
module.exports = readUser