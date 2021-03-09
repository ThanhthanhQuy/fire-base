const app = require('firebase')
const createUser = async (req, res) => {
    try {
        const newDoc = {
            country: 'VN',
            name: 'Thanh Quy',
        }
        const docs = await app.firestore().collection('profiles').doc(newDoc.name).set(newDoc)
        res.send(`Add ${newDoc.name} successful`)
    }
    catch (e) {
        res.send(e.message)
    }
}
module.exports = createUser