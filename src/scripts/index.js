import  "../pages/index.css"; // add import of the main stylesheets file 

import FormValidator from './FormValidator.js';
import Card from './Card.js';
import Popup from './Popup.js';
import PopupWithImage from '../scripts/PopupWithImage.js';
import PopupWithForm from '../scripts/PopupWithForm.js';
import Section from '../scripts/Section.js';
import UserInfo from '../scripts/UserInfo.js';


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
const inputName = document.querySelector('.modal__input_name'); 
const inputDesc = document.querySelector('.modal__input_desc'); 
 
const profileName = document.querySelector('.profile__text_name'); 
const profileDesc = document.querySelector('.profile__text_desc'); 

//add image 
const addImageButton = document.querySelector('.profile__add-button');

const addImageModal = document.querySelector('.modal_type_add-image');

const addImageForm = addImageModal.querySelector('.modal__form');
const addImageTitle = addImageModal.querySelector('.modal__input_image-name');
const addImageUrl = addImageModal.querySelector('.modal__input_url');

//enlarged image 
const imageModal = document.querySelector('.modal_type_image'); 
//const enlargedImage =  imageModal.querySelector('.modal__large-image');
//imageModalEnlarge.src = this._data.link;

//list of originl images
const list = document.querySelector('.elements__list');

//original images 
const initialCards = [
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
},
{
    name: "Vanois National Park",
    link: "https://code.s3.yandex.net/web-code/vanois.jpg",
},
{
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
},
{
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
},
{
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
},
{
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
}
];
//validation

editFormValidator.enableValidation();
addFormValidator.enableValidation();

//opening and closing windows
//
//temp variable for indicating if a certain modal is opened
/*let currentOpenedModal = null;

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
});*/
/*editProfileModal.setEventListeners();
addImageModal.setEventListeners();
imageModal.setEventListeners();*/

//handling forms and images
//
//handle edit profile form
/*const formSubmitHandler = (e) => {
    e.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileDesc.textContent = inputDesc.value; 
    toggleModalWindow(editProfileModal);
} */
//submit edit profile form
//editProfileForm.addEventListener('submit', formSubmitHandler);
//instance of card
const cardAdded = (data) =>{
  const handleCardClick = (addImageTitle) => (addImageTitle.value, addImageUrl.value)
  const cardInstance = new Card(data, handleCardClick, '.card-template')
    const cardElement = cardInstance.createCard();
    //insert into the images list
    defaultList.addItem(cardElement);
}

//popup of image
const imagePopup = new PopupWithImage(imageModal);
imagePopup.setEventListeners();
//add form
const newCardPopup = new PopupWithForm({
  popupSelector:addImageModal,
  popupSubmition: (data) => cardAdded(data)
})

//close form 
/*const closeForm = new PopupWithForm({
  popupSelector: document.querySelector('.modal__close-btn')
});*/
const profileInfo = new UserInfo(inputName, inputDesc);

const profileForm = new PopupWithForm(
  {popupSelector: editProfileModal, 
    popupSubmition: () => profileInfo.setUserInfo({inputName, inputDesc})});


//card list
/*const defaultList  = new Section({
  items: initialCards,
  renderer: (data) => {
    const cardInstance = new Card({
      data:{name: initialCards.name, link: initialCards.link},
      handleCardClick: () => imageModal.open(initialCards.name, initialCards.link)},
      '.card-template');
    const cardElement = cardInstance.createCard();
    defaultList.addItem(cardElement);
    },
}, '.elements__list')*/

const defaultList = new Section({
  items: initialCards,
  renderer: (data) => cardAdded(data)},'.elements__list');
// card list handler renders elements items
defaultList.renderItems();

//open add image form 
addImageButton.addEventListener("click", () => {
  newCardPopup.open();
});

//add image handler
newCardPopup.setEventListeners();

//handle aadding image to list
//addImageForm.addEventListener('submit', defaultList);

//open edit info form
editButton.addEventListener('click', () => {
  const user = profileInfo.getUserInfo;
  profileName.value = user.inputName; 
  profileDesc.value = user.inputDesc; 
  profileForm.open();
})
//edit info  handler

profileForm.setEventListeners();




// add listeners for edit-icon and add-icon
/*addImageButton.addEventListener('click',function(){
  addImageModal.open();
} );*/

//triger close window
//closeForm.setEventListeners();

/*const addImageHandler = (e) => {
  e.preventDefault();
  const cardInstance = new Card({
    name: addImageTitle.value, link: addImageUrl.value
  }, '.card-template');
  const cardElement = cardInstance.createCard();
  //insert into the images list
  list.prepend(cardElement);
  //close the modal window once clicked "submit"
  toggleModalWindow(addImageModal);
};
//add new image once pressed 'submit'
addImageForm.addEventListener('submit', addImageHandler);

//create a new card


initialCards.forEach((data) => { 
  const cardInstance = new Card(data, '.card-template');
  const cardElement = cardInstance.createCard();
  list.prepend(cardElement);
});
*/

