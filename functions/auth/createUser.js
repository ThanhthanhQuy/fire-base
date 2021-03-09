const app = require('firebase')

const createUser = async (req, res) => {
    try {
        const email = 'some@gmail.com'
        const password = '123456'
        await app.auth().createUserWithEmailAndPassword(email, password)
        res.send(`Create user ${email} successful`)
    }
    catch (e) {
        throw e
    }
}
module.exports = createUser