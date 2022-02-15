import images from './gallery-items.js'
import cardsMurkup from './cards-murkup.js'
import refs from './refs.js'

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
 refs.imagesContainer.innerHTML = cardsMurkup(images);

refs.imagesContainer.addEventListener('click', onModalOpen)
refs.modalCloseBtn.addEventListener('click', onModalClose)
refs.modalOverlay.addEventListener('click', onModalClose)
window.addEventListener('keydown', onModalClose)

function getAttributes(src, alt) {
    refs.modalImg.src = src;
    refs.modalImg.alt = alt;
}

function onModalOpen(evt) {
    evt.preventDefault();
    refs.imagesModalWindow.classList.add('is-open');
    
    getAttributes(evt.target.dataset.source, evt.target.alt);
   }

function onModalClose(evt) {
    if (evt.target === evt.currentTarget || evt.code === 'Escape') {
        refs.imagesModalWindow.classList.remove('is-open');

        getAttributes('','')
  }
   }

