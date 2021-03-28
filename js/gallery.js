import galleryItems from './gallery-items.js'
import refs from './refs.js'
import listImg from './list-img.js'


refs.galleryList.innerHTML = listImg(galleryItems);

refs.galleryList.addEventListener('click', onModalOpen);
refs.modalCloseBtn.addEventListener('click', onModalClose);
refs.modalOverlay.addEventListener('click', onModalClose);
window.addEventListener('keydown', onModalClose);
window.addEventListener('keydown', onModalChangeImg);

function getImgAtr(src, alt) {
    refs.modalImg.src = src
    refs.modalImg.alt = alt
}

function onModalOpen(event) {
    event.preventDefault()
    refs.modal.classList.add('is-open')
    getImgAtr(event.target.dataset.source, event.target.alt)
}

function onModalClose(event) {
    if (event.target === event.currentTarget || event.code === "Escape"){
        refs.modal.classList.remove('is-open')

        getImgAtr('','')
    }
}

const arrayImg = galleryItems.map(item => item.original)
const arrayAlt = galleryItems.map(item => item.description)

function onModalChangeImg(event) {
    let indexImg = arrayImg.indexOf(refs.modalImg.src);
    let indexAlt = indexImg
    const indexLastElem = arrayImg.length-1

    if (event.code === 'ArrowRight') {
        if (indexImg < indexLastElem){
            indexImg += 1;
            indexAlt += 1;
            getImgAtr(arrayImg[indexImg], arrayAlt[indexImg])
        }
        else if (indexImg = indexLastElem){
            getImgAtr(arrayImg[0], arrayAlt[0]);
        }
    }
        else if (event.code === 'ArrowLeft'){
            if (indexImg > 0) {
                indexImg -= 1;
                indexAlt -= 1;
                getImgAtr(arrayImg[indexImg], arrayAlt[indexImg]);
            }
        
        else {
            getImgAtr(arrayImg[indexLastElem], arrayAlt[indexLastElem])
        }
    }
}