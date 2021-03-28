
function submitSigIn() {
    let email = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {z
            var user = userCredential.user;
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

function submitSignUp() {
    let email = document.getElementById('login').value;
    let password = document.getElementById('password').value;
    let repeatPassword = document.getElementById('repeat-password').value;

    if (repeatPassword !== password) {
        alert("Пароли отличаются")
        return
    }
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function () {
            console.log("fsdf");
        })
        .catch(function (error) {
            alert("Логин был испоьзован ранее")
        })
}

