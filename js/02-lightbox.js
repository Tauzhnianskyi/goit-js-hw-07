import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");
const item = createGalleryItem(galleryItems);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ description, preview, original }) => {
      return `
     <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
      `;
    })
    .join("");
}

gallery.addEventListener("click", onClick);
gallery.insertAdjacentHTML("beforeend", item);

function onClick(evt) {
  evt.preventDefault();
}

let galleryClick = new SimpleLightbox(".gallery a", {
  captions: true,
  captionsData: "alt",
  captionDelay: 250,
});
