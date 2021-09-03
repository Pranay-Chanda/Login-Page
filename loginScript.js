const userid = document.querySelector('#userID');
const password = document.querySelector('#passWord');
const emailForgotPassword = document.querySelector('#emailForgotPassword');

function setMessage(formElement, type, message) {
    const messageElement = formElement.querySelector('.formMessage');
    messageElement.textContent = message;
    messageElement.classList.remove('formMessage--success', 'formMessage--error');
    messageElement.classList.add(`formMessage--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add('formInput--error');
    inputElement.parentElement.querySelector('.formInput--errorMessage').textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("formInput--error");
    inputElement.parentElement.querySelector(".formInput-errorMessage").textContent = "";
}

function demoLogin(id, password1) {
    if (id.value === 'abc' && password1.value === '123') {
        setMessage(login, 'success', `Welcome ${id.value}`);
    } else {
        setMessage(login, 'error', 'Invalid username or password!')
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const login = document.querySelector('#login');
    const createAccount = document.querySelector('#createAccount');
    const forgotPassword = document.querySelector('#forgotPassword');

    login.addEventListener('submit', (e) => {
        e.preventDefault();
        //fetch credentials
        demoLogin(userid, password);

    });

    forgotPassword.addEventListener('submit', (e) => {
        if (emailForgotPassword.value !== '') {
            setMessage(forgotPassword, 'success', 'A reset password link is sent to your email!');
        } else {
            setMessage(forgotPassword, 'error', 'Enter a valid email address!');
        }
    });

    document.querySelector('#createAccountLink').addEventListener('click', (e) => {
        e.preventDefault();
        login.classList.add('formHidden');
        createAccount.classList.remove('formHidden');
    });

    document.querySelector('#signLink').addEventListener('click', (e) => {
        e.preventDefault();
        login.classList.remove('formHidden');
        createAccount.classList.add('formHidden');
    });

    document.querySelector('#forgotPasswordLink').addEventListener('click', (e) => {
        e.preventDefault();
        login.classList.add('formHidden');
        forgotPassword.classList.remove('formHidden');
    });

    document.querySelector('#loginLink').addEventListener('click', (e) => {
        e.preventDefault();
        login.classList.remove('formHidden');
        forgotPassword.classList.add('formHidden');
    });


});

