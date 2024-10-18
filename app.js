const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')

form.addEventListener('submit', (e) => {
    if (!validateInputs()) {
        e.preventDefault();
    }
})

function validateInputs() {
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    let success = true;
    //username 
    if (usernameVal === '') {
        success = false;
        setError(username, 'Username is Required')
    } else {
        setSuccess(username)
    }
    //email
    if (emailVal === '') {
        success = false;
        setError(email, 'Email is Required')
    } else if (!validateEmail(emailVal)) {
        success = false;
        setError(email, 'Please enter a valid Email')
    } else {
        setSuccess(email)
    }
    //password
    if (passwordVal === '') {
        success = false;
        setError(password, 'Password is Required')
    } else if (passwordVal.length < 8) {
        success = false;
        setError(password, 'Password must be 8 characters')
    } else {
        setSuccess(password)
    }
    //confirm password
    if (cpasswordVal === '') {
        success = false;
        setError(cpassword, 'Confirm password is Required')
    } else if (cpasswordVal !== passwordVal) {
        success = false;
        setError(cpassword, 'Confirm password does not match')
    } else {
        setSuccess(cpassword)
    }
    return success
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')
}
function setSuccess(element) {
    const inputGroup = element.parentElement;
    const errorElement = inputGroup.querySelector('.error')

    errorElement.innerText = '';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')
}
const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};



