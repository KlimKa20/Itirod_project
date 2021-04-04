class auth {

    isAuth() {
        return  firebase.auth().onAuthStateChanged(function(user) {
            return !!user;
        });
    }

    async submitSigIn() {
        let email = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                document.location.href = "../index.html";
            })
            .catch((error) => {
                alert("Неправильный логин или пароль")
            });
    }

    async submitSignUp() {
        let email = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        let repeatPassword = document.getElementById('repeat-password').value;

        if (repeatPassword !== password) {
            alert("Пароли отличаются")
            return
        }
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function () {
                document.location.href = "../index.html";
            })
            .catch(function (error) {
                alert("Логин был испоьзован ранее")
            })
    }

    async logOut() {
        await firebase.auth().signOut().then(function () {
            location.reload()
        });
    }
}

let authObject = new auth()


