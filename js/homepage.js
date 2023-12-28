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
    $('#userHomePage').removeClass('d-none').addClass('d-block');
    $('#userNameSpan').text(userName);
})()


$('#logoutBtn').click(() => {
    localStorage.removeItem(USER_NAME_KEY);
    window.location.replace('index.html');
});