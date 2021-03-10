const app = require('firebase')

const deleteData = async (req, res) => {
    try {
        //delete doc
        // await app.firestore().collection('profiles').doc('Quy').delete()

        //delete field
        await app.firestore().collection('profiles').doc('Thanh Quy').update({
            state : app.firestore.FieldValue.delete()
        })
        res.send(`Delete successful`)
    }
    catch (e) {
        throw e
    }
}

module.exports = deleteData