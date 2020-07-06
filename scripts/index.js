const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__close-btn');
const modal = document.querySelector('.modal');
const form = document.querySelector('.modal__form');

function toggleModal(){
    modal.classList.toggle('modal_is-open');
}

editButton.addEventListener('click', toggleModal);

closeButton.addEventListener('click', toggleModal);

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputName = document.querySelector('.modal__input_type_name');
    const inputDesc = document.querySelector('.modal__input_type_desc');

    const profileName = document.querySelector('.profile__text_type_name');
    const profileDesc = document.querySelector('.profile__text_type_desc');

    profileName.textContent = inputName.value;
    profileDesc.textContent = inputDesc.value;
} )