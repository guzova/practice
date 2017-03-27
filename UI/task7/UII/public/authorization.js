/**
 * Created by GE70 on 21.03.2017.
 */
var authorization = (function () {
    var users = {
        "bah": "password",
        "dashulia_guzova": "689",
        "Ilya": "123",
        "Cat":"456456"
    };

    function logIn(username, password) {
        if (users[username] === password) {
            showMainPage();
            showButthons();
            authorize(username);
            user = username;
        } else {
            alert('incorrect!');
        }
        return false;
    }

    function logInEvent() {
        logIn(document.forms.auth.login.value, document.forms.auth.password.value);
    }

    return {
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