var USERS_KEY = 'usersData';
var USER_NAME_KEY = 'userName';

var userName = '';

(() => {
    userName = localStorage.getItem(USER_NAME_KEY);
    if (userName === null) {
        alert(`You're not logged in correctly!`);
        window.location.replace('index.html');
        return;
    }
    $('#userNameSpan').text(userName);
})()