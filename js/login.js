let formLogin = document.querySelector('#form-login');
let campoEmail = document.querySelector('#email');
let campoPassword = document.querySelector('#password');
let errorLogin = document.querySelector('#error-login');

formLogin.addEventListener('submit', function (event) {
  event.preventDefault();
  if (campoEmail.value == '') {
    errorLogin.innerText = 'El email es obligatorio';
  } else if (campoPassword.value == '') {
    errorLogin.innerText = 'La contraseña es obligatoria';
  } else if (campoPassword.value.length < 6) {
    errorLogin.innerText = 'La contraseña debe tener al menos 6 caracteres';
  } else {
    localStorage.setItem('email', campoEmail.value);
    this.submit();
  }
});