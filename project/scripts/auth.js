class auth {

    isAuth() {
        firebase.auth().onAuthStateChanged(function (userCredential) {
            let log = document.getElementById("auth");
            let create = document.getElementById("create");
            if (userCredential) {
                localStorage.setItem("user", userCredential.email)
                log.textContent = "LogOut";
                log.onclick = function () {
                    authObject.logOut();
                    return false;
                }
                log.href = "/logout"
                create.onclick = function () {
                    onNextPage('/create')
                    return false;
                }
            } else {
                localStorage.setItem("user", "null")
                log.textContent = "LogIn";
                log.href = "/login"
                log.onclick = function () {
                    onNextPage('/login')
                    return false;
                }
                create.onclick = function () {
                    onNextPage('/login')
                    return false;
                }
            }
        });
    }

    async submitSigIn() {
        let email = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                onNextPage("/catalog")
            })
            .catch(() => {
                alert("Неправильный логин или пароль")
            });
    }

    async SigInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider)
            .then(() => {
                onNextPage("/catalog")
            }).catch(() => {
                alert("Невозможно авторизоваться с помощью гугла")
            });
    }

    async SigInWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        await firebase.auth().signInWithPopup(provider)
            .then(() => {
                onNextPage("/catalog")
            }).catch(() => {
                alert("Невозможно авторизоваться с помощью фейсбука")
            });
    }

    async submitSignUp() {
        let email = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        let repeatPassword = document.getElementById('repeat-password').value;

        if (password.length < 4){
            alert("Пароль недопустимой длины")
            return
        }
        else if (repeatPassword !== password) {
            alert("Пароли отличаются")
            return
        }
        await firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function () {
                onNextPage("/catalog")
            })
            .catch(function () {
                alert("Логин был испоьзован ранее")
            })
    }

    async logOut() {
        await firebase.auth().signOut().then(function () {
            onNextPage("/catalog")
        });
    }
}

let authObject = new auth()


