let linkLogout = document.querySelector('#logout');

linkLogout.addEventListener('click', function (event) {
  event.preventDefault();
  localStorage.removeItem('email');
  document.querySelector('#saludo').style.display = 'none';
  document.querySelector('#item-logout').style.display = 'none';
  document.querySelector('#item-login').style.display = 'block';
  document.querySelector('#item-registro').style.display = 'block';
});