class auth {
    constructor() {
        this.user = null
    }

    isAuth() {
        firebase.auth().onAuthStateChanged(function (user) {
            let log = document.getElementById("auth");
            let create = document.getElementById("create");
            if (user) {
                log.textContent = "LogOut";
                log.onclick = function () {
                    authObject.logOut()
                }
                create.onclick = function (){
                    onNextPage('/Itirod_project/project/create')
                }
            } else {
                log.textContent = "LogIn";
                log.onclick = function () {
                    onNextPage('/Itirod_project/project/login')
                }
                create.onclick = function (){
                    onNextPage('/Itirod_project/project/login')
                }
            }
        });
    }

    async submitSigIn() {
        let email = document.getElementById('login').value;
        let password = document.getElementById('password').value;
        await firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                this.user = userCredential.user;
                onNextPage("/Itirod_project/project/catalog")
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
                onNextPage("/Itirod_project/project/catalog")
            })
            .catch(function (error) {
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


