let parametros = new URLSearchParams(location.search);
let categoria = parametros.get('category');
let tituloCategoria = document.querySelector('#titulo-categoria');
let grillaCategoria = document.querySelector('#grilla-categoria');

tituloCategoria.innerText = categoria;

fetch('https://dummyjson.com/products/category/' + categoria)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
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
    grillaCategoria.innerHTML = productos;
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });