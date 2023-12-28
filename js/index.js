var EMAIL_REGEX = /^[\w-\.]+@([\w-])+\.com$/;
var USERS_KEY = 'usersData';

var usersFromLocalStorage = [];

// Self invoking function - loading users from localStorage
(() => {
    var _users = localStorage.getItem(USERS_KEY);
    if (_users === null)
        return;
    usersFromLocalStorage = JSON.parse(_users);
})()

// Toggling password input type to show text
$('#togglePassword').click(() => {
    $('#userPasswordInput').attr('type', () => {
        if ($('#userPasswordInput').attr('type') == 'password')
            $('#userPasswordInput').attr('type', 'text');
        else
            $('#userPasswordInput').attr('type', 'password');
    });
})

// User Authentication
$('#submitBtn').click(() => {
    var userEmail = $('#userEmailInput').val();
    var userPassword = $('#userPasswordInput').val();

    if (userEmail.length <= 0 || userPassword.length <= 0)
        return alert('Missing email or password'); // TODO: add modal component

    if (!EMAIL_REGEX.test(userEmail))
        return alert('Invalid email') // TODO: modal component

    for (var i = 0; i < usersFromLocalStorage.length; i++) {
        var user=usersFromLocalStorage[i];
        if (user.email === userEmail) {
            if (user.password !== userPassword) {
                alert('Invalid password');
                return;
            }
            // user found - correct email and pw
            localStorage.setItem('userIndex', i);
            return window.location.replace('/homepage.html');
        }
    }
    alert('User not found'); // TODO: Modal component
});