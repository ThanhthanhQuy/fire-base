import App from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDNRVcdyu6S_3JrUt-Ut6SE77mvBveQiIE", authDomain: "example-1-e897a.firebaseapp.com",
    databaseURL: "https://example-1-e897a-default-rtdb.firebaseio.com",
    projectId: "example-1-e897a",
    storageBucket: "example-1-e897a.appspot.com",
    messagingSenderId: "479965426750",
    appId: "1:479965426750:web:7726fcf819110ce48e4d6f",
    measurementId: "G-7N7EXBEBMG"
};

export default App.initializeApp(firebaseConfig)

