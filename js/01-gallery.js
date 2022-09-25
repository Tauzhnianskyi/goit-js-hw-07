import { galleryItems } from "./gallery-items.js";
// Change code below this line
const gallery = document.querySelector(".gallery");
const items = createGalleryItem(galleryItems);

gallery.insertAdjacentHTML("beforeend", items);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ description, preview, original }) => {
      return `
      <div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
      `;
    })
    .join("");
}
gallery.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }

  const currentImg = evt.target;

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${currentImg.dataset.source}" width="1000"/>
    </div>
`);

  instance.show();
  document.addEventListener("keydown", closeModal);

  function closeModal(evt) {
    if (evt.which === "27") {
      instance.close();
    }
    instance.close();
  }
}
