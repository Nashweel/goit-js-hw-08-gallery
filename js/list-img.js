export default function createListImg(array) {
    return array.map(({original, preview, description}) => 
        `
        <li class="gallery__item">
  <a
    class="gallery__link"
    href="">

    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
    `
).join('')
    
};