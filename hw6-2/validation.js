function validateLogin(login) {
    if (login.length > 1 && login.length < 50) {
        return { valid: true };
    } else {
        return { valid: false, message: 'Должно быть больше 1 одного символа и меньше 50' };
    }
}

function validatePassword(password) {
    if (password.length > 5 && password.length < 50) {
        return { valid: true };
    } else {
        return { valid: false, message: 'Минимум	5	символов,	максимум	50' };
    }
}

function validatePasswordConf(passwordConf, password) {
    if (passwordConf === password) {
        return { valid: true };
    } else {
        return { valid: false, message: 'Значение	должно	совпадать	с	полем	пароль.' };
    }
}

function submitForm(event) {
    event.preventDefault();

    let login = Array.from(event.srcElement.childNodes).find(elem => elem.name == "login");
    let password = Array.from(event.srcElement.childNodes).find(elem => elem.name == "password");
    let passwordConf = Array.from(event.srcElement.childNodes).find(elem => elem.name == "password-confirmation");

    var loginErrorMessage = document.querySelector("#loginErrorMessage"); 
    var passwordErrorMessage = document.querySelector("#passwordErrorMessage"); 
    var passwordConfErrorMessage = document.querySelector("#passwordConfErrorMessage"); 


    if (!validateLogin(login.value).valid) {
        if (!loginErrorMessage) login.insertAdjacentHTML('afterEnd', '<p id="loginErrorMessage" class="p">' + validateLogin(login.value).message + '</p>');
    } else {
        if (loginErrorMessage) loginErrorMessage.remove();
    }

    if (!validatePassword(password.value).valid) {
        if(!passwordErrorMessage) password.insertAdjacentHTML('afterEnd', '<p id="passwordErrorMessage" class="p">' + validatePassword(password.value).message + '</p>');
    } else {
        if (passwordErrorMessage) passwordErrorMessage.remove();
    }
    
    if (!validatePasswordConf(passwordConf.value, password.value).valid) {
        if(!passwordConfErrorMessage) passwordConf.insertAdjacentHTML('afterEnd', '<p  id="passwordConfErrorMessage" class="p">' + validatePasswordConf(passwordConf.value).message + '</p>');
    } else {
        if(passwordConfErrorMessage) passwordConfErrorMessage.remove();
    }

    if (validateLogin(login.value).valid && 
    validatePassword(password.value).valid &&
     validatePasswordConf(passwordConf.value, password.value).valid) alert('Форма отправлена!');
} 
