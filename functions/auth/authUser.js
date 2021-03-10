const app = require('firebase')

const authUser = async (req, res) => {
    try {
        const email = 'some@gmail.com'
        const password = '123456'
        const user = await app.auth().signInWithEmailAndPassword(email, password)
        res.send(user.user)
        if(!user.user) return false

        return user.user.uid
    }
    catch (e) {
        throw e
    }
}
module.exports = authUser