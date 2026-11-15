let formBuscador = document.querySelector('#form-buscador');
let campoBusqueda = document.querySelector('#campo-busqueda');
let errorBusqueda = document.querySelector('#error-busqueda');

formBuscador.addEventListener('submit', function (event) {
  if (campoBusqueda.value == '') {
    event.preventDefault();
    errorBusqueda.innerText = 'El campo de búsqueda no puede estar vacío';
  } else if (campoBusqueda.value.length < 3) {
    event.preventDefault();
    errorBusqueda.innerText = 'El término buscado debe tener al menos 3 caracteres';
  }
});

