let emailGuardado = localStorage.getItem('email');
let saludo = document.querySelector('#saludo');
let emailUsuario = document.querySelector('#email-usuario');
let itemLogout = document.querySelector('#item-logout');
let itemLogin = document.querySelector('#item-login');
let itemRegistro = document.querySelector('#item-registro');

if (emailGuardado != null) {
  emailUsuario.innerText = emailGuardado;
  saludo.style.display = 'block';
  itemLogout.style.display = 'block';
  itemLogin.style.display = 'none';
  itemRegistro.style.display = 'none';
}