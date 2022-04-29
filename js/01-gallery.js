import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);



const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)


function createGalleryItemMarkup(galleryItems) {
    const markup = galleryItems.map(({preview ,original,description}) => {
        return `
        <div class="gallery__item">
    <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
    </a>
    </div>
    `;
    }).join('');
    
    return markup;
}

function onGalleryContainerClick(event) {
    const isGalleryImageEl = event.target.classlist.contains('gallery__image');
    if (!isGalleryImageEl) {
        return;
    }
    
    const urlImg = event.target.dataset.source;
    console.log(urlImg)
    
}



const instance = basicLightbox.create(`
    <img src="${urlImg}">
`)

instance.show()


