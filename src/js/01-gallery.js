import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<div  class="gallery__item">
        <a class="gallery__link"
            href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"/>
        </a>
    </div>`,
  )
  .join('');

const galleryContainer = document.querySelector('.gallery');

galleryContainer.insertAdjacentHTML('afterbegin', gallery);

let ligthBox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

console.log(galleryItems);
