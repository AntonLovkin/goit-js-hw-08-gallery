import images from './gallery-items.js'

//------------------------------------------------
// Разбей задание на несколько подзадач :

// 1) Создание и рендер разметки по массиву данных и предоставленному шаблону.
// 2) Реализация делегирования на галерее ul.js-gallery и получение url большого изображения.

// 3) Открытие модального окна по клику на элементе галереи.
// 4) Подмена значения атрибута src элемента img.lightbox__image.

// 5) Закрытие модального окна по клику на кнопку button[data-action="close-lightbox"].
// 6) Очистка значения атрибута src элемента img.lightbox__image.Это необходимо для того,
// чтобы при следующем открытии модального окна, пока грузится изображение,
// мы не видели предыдущее.
//-------------------------------------------------
// console.log()
// console.log(createImageCardsMarkup(images));
const imagesContainer = document.querySelector('.js-gallery');
// console.log(imagesContainer)
const imagesModalWindow = document.querySelector('.js-lightbox');
// console.log(imagesModalWindow)
const imagesSrcAttributeChange = document.querySelector('.lightbox__image');
// console.log(imagesSrcAttributeChange)

const imagesMarkup = createImageCardsMarkup(images);
// console.log(imagesMarkup)
imagesContainer.insertAdjacentHTML('beforeend', imagesMarkup);

imagesContainer.addEventListener('click', onImageContainerClick);
imagesModalWindow.addEventListener('click', onBtnCloseClick);

function createImageCardsMarkup(images) {
    return images.map(({original, preview, description}) => {
        return ` 
<li class="gallery__item">
  <a class="gallery__link"
    href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"/>
  </a>
</li>
    `;
    })
    .join('')
};

function onImageContainerClick(evt) {
    evt.preventDefault();
    const isImageTargetEl = evt.target.classList.contains('gallery__image');
    
    if (!isImageTargetEl) {
    //    console.log(isImageTargetEl)
        return;  
    }
    imagesModalWindow.classList.add('is-open');
    // console.log(evt.target.classList.contains('gallery__item'));

    const swatchEl = evt.target;

    // console.log(swatchEl.dataset.source)
    imagesSrcAttributeChange.setAttribute("src", `${swatchEl.dataset.source}` );
    // console.log(imagesSrcAttributeChange.getAttribute("src"));
}

// изменить эту фунуцию
function onBtnCloseClick(evt) {
 const isImageTargetEl = evt.target.classList.contains('is-open');
    if (isImageTargetEl) {
       console.log(isImageTargetEl)
        return;
    }
    imagesModalWindow.classList.remove('is-open');
    // console.log(evt.target.classList.contains('gallery__item'))
}
