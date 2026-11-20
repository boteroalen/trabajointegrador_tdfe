let grillaUno = document.querySelector('#grilla-uno');
let grillaDos = document.querySelector('#grilla-dos');

fetch('https://dummyjson.com/products/category/smartphones')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let productos = '';
    for (let i = 0; i < data.products.length && i < 10; i++) {
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
    grillaUno.innerHTML = productos;
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });

fetch('https://dummyjson.com/products/category/mobile-accessories')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let productos = '';
    for (let i = 0; i < data.products.length && i < 10; i++) {
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
    grillaDos.innerHTML = productos;
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });