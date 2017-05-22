/**
 * Created by GE70 on 21.03.2017.
 */
const authorization = (function () {
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
        );
    }

    function login(user) {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('POST', '/login');
            xhr.setRequestHeader('content-type', 'application/json');
            xhr.onload = () => xhr.status === 200 ? resolve(xhr.responseText) : reject();
            xhr.onerror = () => reject();
            xhr.send(JSON.stringify(user));
        });
    }

    function logout() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/logout');
            xhr.onload = () => xhr.status === 200 ? resolve() : reject();
            xhr.onerror = () => resolve();
            xhr.send();
        });
    }

    function getUsername() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', '/username');
            xhr.onload = () => xhr.status === 200 ? resolve(xhr.responseText) : reject();
            xhr.onerror = () => reject();
            xhr.send();
        });
    }

    return {
        getUsername,
        logout,
        event: logInEvent
    };
}());
