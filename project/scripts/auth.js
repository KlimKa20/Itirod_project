class auth {

    isAuth() {
        firebase.auth().onAuthStateChanged(function (userCredential) {
            let log = document.getElementById("auth");
            let create = document.getElementById("create");
            if (userCredential) {
                localStorage.setItem("user", userCredential.email)
                log.textContent = "LogOut";
                log.onclick = function () {
                    authObject.logOut()
                }
                create.onclick = function () {
                    onNextPage('/Itirod_project/project/create')
                }
            } else {
                localStorage.setItem("user", "null")
                log.textContent = "LogIn";
                log.onclick = function () {
                    onNextPage('/Itirod_project/project/login')
                }
                create.onclick = function () {
                    onNextPage('/Itirod_project/project/login')
                }
            }
        });
    }

    async submitSigIn() {
        let email = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                onNextPage("/Itirod_project/project/catalog")
            })
            .catch(() => {
                alert("Неправильный логин или пароль")
            });
    }

    async SigInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        await firebase.auth().signInWithPopup(provider)
            .then(() => {
                onNextPage("/Itirod_project/project/catalog")
            }).catch(() => {
                alert("Невозможно авторизоваться с помощью гугла")
            });
    }

    async SigInWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        await firebase.auth().signInWithPopup(provider)
            .then(() => {
                onNextPage("/Itirod_project/project/catalog")
            }).catch(() => {
                alert("Невозможно авторизоваться с помощью фейсбука")
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
                onNextPage("/Itirod_project/project/catalog")
            })
            .catch(function () {
                alert("Логин был испоьзован ранее")
            })
    }

    async logOut() {
        await firebase.auth().signOut().then(function () {
            onNextPage("/Itirod_project/project/catalog")
        });
    }
}

let authObject = new auth()


