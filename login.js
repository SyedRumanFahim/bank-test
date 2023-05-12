document.getElementById('btn-submit').addEventListener('click', function(event){
    event.preventDefault();
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    if(emailField.value=='test@gmail.com' && passwordField.value == '12345'){
        window.location.href = 'bank.html';
    }else{
        alert('invalid user');
    }
})