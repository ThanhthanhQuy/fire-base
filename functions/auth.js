exports.createUser = functions.https.onRequest(async (request, response) => {
    const email = 'cdf@gmail.com'
    const passWord = '123456'
    App.auth().createUserWithEmailAndPassword(email, passWord)
        .then(userCredential => {
            response.send(userCredential.user)
        })
        .catch(error => {
            console.log(error)
            response.send(error.message)
        })
});

exports.authUser = functions.https.onRequest(async (request, response) => {
    const email = 'cdf@gmail.com'
    const passWord = '123456'
    App.auth().signInWithEmailAndPassword(email, passWord)
        .then(userCredential => {
            response.send(userCredential.user)
        })
        .catch(error => {
            console.log(error)
            response.send(error.message)
        })
});