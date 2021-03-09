const app = require('firebase')
const readUser = async (req, res) => {
    try {
        const docs = await app.firestore().collection('profiles').doc('users').get()
        res.send(docs.data())
    }
    catch (e) {
        res.send(e.message)
        throw e
    }
}
module.exports = readUser