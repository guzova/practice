/**
 * Created by GE70 on 21.03.2017.
 */
var authorization = (function () {

    function logInEvent() {
        const user = {
            username: document.forms.auth.login.value,
            password: document.forms.auth.password.value
        };
        login(user).then(
            name => {
                authorize(name);
            },
            error => alert('incorrect!')
        )
    }

    function login(user) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/login');
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.onload = () => xhr.status === 200 ? resolve(xhr.responseText) : reject();
            xhr.onerror = () => reject();
            xhr.send(JSON.stringify(user));
        })
    }

    function logout() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/logout');
            xhr.onload = () => xhr.status === 200 ? resolve() : reject();
            xhr.onerror = () => resolve();
            xhr.send();
        })
    }

    function getUsername() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/username');
            xhr.onload = () => xhr.status === 200 ? resolve(xhr.responseText) : reject();
            xhr.onerror = () => reject();
            xhr.send();
        })
    }

    return {
        getUsername,
        logout,
        event: logInEvent
    }
})();

/*function logIn() {
 var name = document.getElementById("autinput").value;
 var password = document.getElementById("autinput1").value;
 if (userModel.checkForLogIn(name, password)) {
 user = name;
 localStorage.setItem("username", user);
 window.location = "index.html";
 }
 else {
 document.querySelector('.maintape').style.display = 'none';
 document.querySelector('#add-news').style.display = 'none';
 document.querySelector('.authorization').style.display = 'none';
 document.querySelector('.error').style.display = '';
 document.querySelector('.newspage').style.display = 'none';
 }
 }

 function quit() {
 localStorage.removeItem("username");
 user = null;
 authorize();
 }*/