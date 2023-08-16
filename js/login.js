// step 1: add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click',function(){
    // step 2 : get the email address inside the email field
    // always remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    //Danger:  DO NOT VERIFY email Password in the client side
//  step 4: verify email and password
if (email === 'jihadul@gmail.com' && password ==='passwordnai' ){
    window.location.href= 'bank.html'
}
    else{
        alert('Invalid password or email')
    }
})