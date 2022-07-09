const btn = document.querySelector('.btn');
function checkPass(){
    let msg = document.querySelector('.error-message');
    let userChoice = document.querySelector('#user-password').value;
    let passConfirm = document.querySelector('#password-confirm').value;
    console.log([userChoice,passConfirm]);
    if (userChoice === passConfirm){
        msg.textContent = 'Password Matched';
        msg.style.color = 'green';
    }
    else{
        msg.textContent = 'Password does not Match';
        msg.style.color = 'red';
    }
}