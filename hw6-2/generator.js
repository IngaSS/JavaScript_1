generator = {
    generateForm() {
        let form = document.createElement('form');
        document.body.appendChild(form);
        form.type = 'form';
        form.className = 'form';
        form.addEventListener('submit', submitForm);

        let logIn = document.createElement('input');
        logIn.type = 'text';
        logIn.name = 'login';
        logIn.className = 'login';
        logIn.placeholder = 'Введите логин';
        form.appendChild(logIn);

        let password = document.createElement('input');
        password.type = 'password';
        password.name = 'password';
        password.className = 'password';
        password.placeholder = 'Введите пароль';

        form.appendChild(password);

        let passwordConf = document.createElement('input');
        passwordConf.type = 'password';
        passwordConf.name = 'password-confirmation';
        passwordConf.className = 'password';
        passwordConf.placeholder = 'Подтверждение пароля';

        form.appendChild(passwordConf);

        let button = document.createElement('input');
        button.type = 'submit';
        button.className = 'button';
        button.innerText = 'Отправить';
        
        form.appendChild(button);

    }
}
