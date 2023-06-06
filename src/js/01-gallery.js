// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

// Importación de la biblioteca SimpleLightbox
import SimpleLightbox from 'simplelightbox';

// Importación adicional de estilos
import 'simplelightbox/dist/simple-lightbox.min.css';

// Importación de la matriz galleryItems desde el archivo gallery-items.js
import { galleryItems } from './gallery-items.js';

console.log(galleryItems);

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.gallery');

  const galleryMarkup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
          </a>
        </li>`
    )
    .join('');

  gallery.innerHTML = galleryMarkup;

  // Inicialización de SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a');

  gallery.addEventListener('click', event => {
    event.preventDefault();

    if (event.target.classList.contains('gallery__image')) {
      const imageUrl = event.target.dataset.source;

      lightbox.open({ source: imageUrl });
    }
  });
});
