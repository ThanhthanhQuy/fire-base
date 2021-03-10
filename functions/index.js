const App = require("firebase")
const functions = require("firebase-functions");

const firebaseConfig = {
    apiKey: "AIzaSyDNRVcdyu6S_3JrUt-Ut6SE77mvBveQiIE",
    authDomain: "example-1-e897a.firebaseapp.com",
    databaseURL: "https://example-1-e897a-default-rtdb.firebaseio.com",
    projectId: "example-1-e897a",
    storageBucket: "example-1-e897a.appspot.com",
    messagingSenderId: "479965426750",
    appId: "1:479965426750:web:7726fcf819110ce48e4d6f",
    measurementId: "G-7N7EXBEBMG"
};

const app = App.initializeApp(firebaseConfig);

exports.helloWorld = functions.https.onRequest((request, response) => {
    functions.logger.info("Hello logs!", {structuredData: true});
    response.send("Hello from Firebase!");
});

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

exports.createData = functions.https.onRequest(async (request, response) => {
    const data = {
      name: 'Los Angeles',
      state: 'CA',
      country: 'USA'
    };
    const res = await App.firestore().collection('profiles').doc('users').set(data);
    response.send(res)
});

exports.getData = functions.https.onRequest(async (request, response) => {
    const res = await App.firestore().collection('profiles').doc('users').get();
    response.send(res.data())
});