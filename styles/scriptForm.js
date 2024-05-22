//REGISTRATION FORM

function CheckInfo(event){
    let name = document.querySelector('#name');
    let phone = document.querySelector('#phone');
    let password = document.querySelector('#password');
    let repeatPassword = document.querySelector('#repeat_password');

    event.preventDefault();

  if (!/^[А-Яа-яЁё\s]+$/.test(name.value)){
    name.style.borderColor = "red";
    alert('поле "имя" доолжно содержать только кириллицу');
  }
  if (!/^(\+7|8)?[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/.test(phone.value)){
    phone.style.borderColor = "red";
    alert('поле "телефон" доолжно иметь формат +7 888 888 88 88');
  }
  if (password.value.length < 11) {
        password.style.borderColor = "red";
        alert('поле "пароль" доолжно иметь длину не меньше 11 символов');
    }
    if (repeatPassword.value != password.value) {
        repeatPassword.style.borderColor = "red";
        alert('пароли не совпадают');
    }

    if (/^[А-Яа-яЁё\s]+$/.test(name.value) && password.value.length >= 11 
    	&& repeatPassword.value == password.value) {
    	window.location = 'index.html';
    }

}