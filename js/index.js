// Toggling password input type to show text
$('#togglePassword').click(() => {
    $('#userPasswordInput').attr('type', () => {
        if ($('#userPasswordInput').attr('type') == 'password')
            $('#userPasswordInput').attr('type', 'text');
        else
            $('#userPasswordInput').attr('type', 'password');
    });
})
