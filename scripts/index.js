const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');

function toggleModal(){
    modal.classList.toggle('modal_is-open');
}

editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);

form.addEventListener('submit', () => {
    const inputName = document.querySelector('.form__input');
    const inputDescription = document.querySelector('.form__input');
} )