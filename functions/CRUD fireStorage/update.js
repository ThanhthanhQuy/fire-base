const app = require('firebase')

const updateData = async (req, res) => {
    try {
        const updateData = {}
        await app.firestore().collection('profiles').doc('Thanh Quy').update(
            {
                name: 'Quy Nguyen',
                country : 'USA',
                state : 'CA'
            })

        res.send('Update Successful')
    }
    catch (e) {
        res.send(e.message)
        throw e
    }
}

module.exports = updateData