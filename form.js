console.log('form.js loaded');

const pseudo = document.getElementById('pseudo');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password_confirm = document.getElementById('password_confirm');
const clearButton = document.getElementsByTagName('button')[0];
const checkLink = document.getElementById('check');

let clearedOncePassword = false;
let clearedOncePasswordConfirm = false;

password.addEventListener('input', () => {
    if (!clearedOncePassword && password.value === '') {
        password.type = 'password';
        clearedOncePassword = true;
    }
});

password_confirm.addEventListener('input', () => {
    if (!clearedOncePasswordConfirm && password_confirm.value === '') {
        password_confirm.type = 'password';
        clearedOncePasswordConfirm = true;
    }
});

function clearAllFields() {
    pseudo.value = 'Tapez votre pseudo';
    email.value = 'Tapez votre adresse E-mail';
    password.type = 'text';
    password.value = 'Tapez votre mot de passe';
    password_confirm.type = 'text';
    password_confirm.value = 'Confirmez votre mot de passe';
}

function champsValides() {
    return (
        pseudo.value !== 'Tapez votre pseudo' && pseudo.value.trim() !== '' &&
        email.value !== 'Tapez votre adresse E-mail' && email.value.trim() !== '' &&
        password.value !== 'Tapez votre mot de passe' && password.value.trim() !== '' &&
        password_confirm.value !== 'Confirmez votre mot de passe' && password_confirm.value.trim() !== ''
    );
}

function checkPasswords() {
    return password.value === password_confirm.value;
    console.log(password.value, password_confirm.value);
}

clearButton.addEventListener('click', (e) => {
    e.preventDefault(); 
    clearAllFields(); 
    console.log('All fields cleared.');
});

checkLink.addEventListener('click', (e) => {
    if (!champsValides()) {
        e.preventDefault();
        clearAllFields(); 
        alert('eh remplis tout');
    } else if (!checkPasswords()) {
        e.preventDefault();
        clearAllFields();
        alert('Les mots de passe ne correspondent pas');
    }
});
