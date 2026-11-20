let parametros = new URLSearchParams(location.search);
let idProducto = parametros.get('id');

fetch('https://dummyjson.com/products/' + idProducto)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    document.querySelector('#nombre').innerText = data.title;
    document.querySelector('#descripcion').innerText = data.description;
    document.querySelector('#precio').innerText = '$ ' + data.price;
    document.querySelector('#stock').innerText = data.stock + ' unidades';

    if (data.brand == undefined) {
      document.querySelector('#marca').innerText = 'Sin marca';
    } else {
      document.querySelector('#marca').innerText = data.brand;
    }

    let foto = document.querySelector('#foto');
    foto.src = data.thumbnail;
    foto.alt = data.title;

    let linkCategoria = document.querySelector('#categoria');
    linkCategoria.innerText = data.category;
    linkCategoria.href = 'category.html?category=' + data.category;

    let tags = '';
    for (let i = 0; i < data.tags.length && i < 3; i++) {
      tags += `<li>${data.tags[i]}</li>`;
    }
    document.querySelector('#tags').innerHTML = tags;

    let reviews = '';
    for (let i = 0; i < data.reviews.length; i++) {
      let review = data.reviews[i];
      reviews += `<article class="review">
        <p class="rating">Rating: ${review.rating}/5</p>
        <p>${review.comment}</p>
        <p class="review-datos">${review.reviewerName} · ${new Date(review.date).toLocaleDateString('es-AR')}</p>
      </article>`;
    }
    document.querySelector('#reviews').innerHTML = reviews;
  })
  .catch(function (error) {
    console.log('Error: ' + error);
  });