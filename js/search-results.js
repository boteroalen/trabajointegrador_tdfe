let parametros = new URLSearchParams(location.search);
let termino = parametros.get('busqueda');
let grillaResultados = document.querySelector('#grilla-resultados');
let sinResultados = document.querySelector('#sin-resultados');

document.querySelector('#termino').innerText = termino;

fetch('https://dummyjson.com/products/search?q=' + termino)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    if (data.products.length == 0) {
      sinResultados.innerText = 'No hay resultados para el término: ' + termino;
      sinResultados.style.display = 'block';
    } else {
      let productos = '';
      for (let i = 0; i < data.products.length; i++) {
        let producto = data.products[i];
        productos += `<article class="tarjeta">
            <div class="foto">
              <img src="${producto.thumbnail}" alt="${producto.title}">
            </div>
            <h3>${producto.title}</h3>
            <p class="descripcion">${producto.description}</p>
            <p class="precio">$ ${producto.price}</p>
            <a href="product.html?id=${producto.id}" class="boton">ver detalle</a>
          </article>`;
      }
      grillaResultados.innerHTML = productos;
    }
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });