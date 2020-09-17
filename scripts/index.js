import FormValidator from './FormValidator.js';
import Card from './Card.js';

const defaultConfig = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__save",
  inactiveButtonClass: "modal__save_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}

const addCardForm = document.querySelector('.modal__form_type_add-image');
const addFormValidator = new FormValidator(defaultConfig, addCardForm);


//edit profile
const editProfileModal = document.querySelector('.modal_type_edit-profile')
const editProfileForm = editProfileModal.querySelector('.modal__form')
const editFormValidator = new FormValidator(defaultConfig, editProfileForm);

const editButton = document.querySelector('.profile__edit-button'); 
const editCloseButton = document.querySelector('.modal__close-btn_type_edit-profile'); 
const inputName = document.querySelector('.modal__input_name'); 
const inputDesc = document.querySelector('.modal__input_desc'); 
 
const profileName = document.querySelector('.profile__text_name'); 
const profileDesc = document.querySelector('.profile__text_desc'); 

//add image 
const addImageButton = document.querySelector('.profile__add-button');

const addImageModal = document.querySelector('.modal_type_add-image');

const addImageForm = addImageModal.querySelector('.modal__form');
const closeAddImage = addImageModal.querySelector('.modal__close-btn_type_add-image');
const addImageTitle = addImageModal.querySelector('.modal__input_image-name');
const addImageUrl = addImageModal.querySelector('.modal__input_url');
 

//image enlarged
const imageModal = document.querySelector('.modal_type_image');
const closeImageModal = imageModal.querySelector('.modal__close-btn_type_image');
const modalImg = document.getElementById("img-large");
const imageModalEnlarge = imageModal.querySelector('.modal__large-image');
const imageModalCaption = imageModal.querySelector('.modal__caption');


//new images template
const cardTemplate = document.querySelector('.card-template').content.querySelector('.elements__item');

//opened window
const modalOpen = document.querySelector('.modal_is-open');

//list of originl images
const list = document.querySelector('.elements__list');

//original images 
const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg"
},
{
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg"
},
{
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg"
},
{
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
},
{
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
},
{
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
}
];
//validation

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//opening and closing windows
//
//temp variable for indicating if a certain modal is opened
let currentOpenedModal = null;

//close or open a modal
export function toggleModalWindow(modal) {
  const isModalOpened = modal.classList.contains('modal_is-open');
  //open or close modal
   modal.classList.toggle('modal_is-open');
  //the current state of the modal is opened or closed
  currentOpenedModal = modal;
  //take off the listeners if the window is opened
  if (isModalOpened) {
    //listener of closing window when clicked outside of it
    modal.removeEventListener('click', closeByClick);
    //listener of closing window by pressing esc
    document.removeEventListener('keydown', closeByEsc);
  }
  //add listeners when window is closed
  else {
    
    //listener of closing window when clicked outside of it
    modal.addEventListener('click', closeByClick);
    //listener of closing window by pressing esc
    document.addEventListener('keydown', closeByEsc);
  }
}
//close window by pressing esc
function closeByEsc(modal){
  const hasOpenModal = Boolean(document.querySelectorAll(".modal_is-open"));
  if (modal.code === "Escape" && hasOpenModal) {
    toggleModalWindow(currentOpenedModal);
 
  }
} 
//close window by clicking outside of window
function closeByClick(modal){
  if (modal.target.classList.contains('modal__close-btn') ||
  modal.target.classList.contains('modal')) {
    toggleModalWindow(currentOpenedModal);
  }
}
//open add image modal by clicking the button
addImageButton.addEventListener('click', () => {
  toggleModalWindow(addImageModal);
});

//open edit profile by clicking on the button
editButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
});


//handling forms and images
//
//handle edit profile form
const formSubmitHandler = (e) => {
    e.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileDesc.textContent = inputDesc.value; 
    toggleModalWindow(editProfileModal);
} 
//submit edit profile form
editProfileForm.addEventListener('submit', formSubmitHandler);

//new image handler 
const addImageHandler = (e) => {
  e.preventDefault();
  const cardElement = card.createCard({
    name: addImageTitle.value, link: addImageUrl.value
  });
  //insert into the images list
  list.prepend(cardElement);
  //close the modal window once clicked "submit"
  toggleModalWindow(addImageModal);
};
//add new image once pressed 'submit'
addImageForm.addEventListener('submit', addImageHandler);

//create a new card

const card = new Card({text:'123', link: 'src'}, '.card-template');
function renderImage(data) { 
  console.log(card);
  console.log(data);
  list.prepend(card.createCard(data)); 
} 
initialCards.forEach((data) => { 
  renderImage(data) 
}) 

