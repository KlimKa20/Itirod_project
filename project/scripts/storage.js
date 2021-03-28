const firebaseConfig = {
    apiKey: "AIzaSyAIif9tvom9DPcBo8YMVPx5rQ0hZOBDpvQ",
    authDomain: "cocktail-database-cc73f.firebaseapp.com",
    databaseURL: "https://cocktail-database-cc73f-default-rtdb.firebaseio.com",
    projectId: "cocktail-database-cc73f",
    storageBucket: "cocktail-database-cc73f.appspot.com",
    messagingSenderId: "43736306547",
    appId: "1:43736306547:web:70a7e94b40a8b2461a6b06",
    measurementId: "G-Q2G9RQNJ9K"
};


class Storage {
    constructor() {
        firebase.initializeApp(firebaseConfig);
        this.database = firebase.firestore();
    }

    async getAllCocktail() {
        this.database.collection("cocktails").add({
            name: "Tokyo",
            country: "Japan"
        })
            .then(function () {

            })
            .catch(function () {

            });
    }

    addCocktail(cocktail) {
        this.database.collection("cocktails").doc()
            .withConverter(cocktailConverter)
            .set(cocktail);
    }
}

let coffeeStorage = new Storage();