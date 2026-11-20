let formBuscador = document.querySelector('#form-buscador');
let campoBusqueda = document.querySelector('#campo-busqueda');
let errorBusqueda = document.querySelector('#error-busqueda');

formBuscador.addEventListener('submit', function (event) {
  event.preventDefault();
  if (campoBusqueda.value == '') {
    errorBusqueda.innerText = 'El campo de búsqueda no puede estar vacío';
  } else if (campoBusqueda.value.length < 3) {
    errorBusqueda.innerText = 'El término buscado debe tener al menos 3 caracteres';
  } else {
    this.submit();
  }
});