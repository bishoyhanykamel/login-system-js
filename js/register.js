// constants
var USERS_KEY = 'usersData';
var EMAIL_REGEX = /^[\w-\.]+@([\w-])+\.com$/;

// global vars
var usersFromLocalStorage = [];

// Self-invoked function to load users
(() => {
    var _loadedUsers = localStorage.getItem(USERS_KEY);
    if (_loadedUsers === null)
        return [];
    usersFromLocalStorage = JSON.parse(_loadedUsers);
})()

$('#submitBtn').click(() => {
    var userName = $('#userNameInput').val();
    var userEmail = $('#userEmailInput').val();
    var userPassword = $('#userPasswordInput').val();

    if (userEmail.length <= 0 || userPassword.length <= 0 || userName.length <= 0)
        return alert('Please fill out all inputs'); // TODO: add modal component

    if (!EMAIL_REGEX.test(userEmail))
        return alert('Invalid email') // TODO: modal component

    if(userExists(userEmail, usersFromLocalStorage) >= 0) 
        return alert('User already registered'); // TODO: Modal component

    var newUser = {
        name: userName,
        email: userEmail,
        password: userPassword
    }
    usersFromLocalStorage.push(newUser);
    saveUsers(usersFromLocalStorage);
    alert('Registration success');
    return window.location.replace('index.html');
});


function userExists(_email, _users) {
    for(var i = 0; i < _users.length; i++) {
        if(_users[i].email === _email)
        return i;
    }
    return -1;
}

function saveUsers(users) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
} 