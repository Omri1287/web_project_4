import  "../pages/index.css"; 
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';


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

//enlarged image 
const imageModal = document.querySelector('.modal_type_image'); 
const enlargedImage =  imageModal.querySelector('.modal__large-image');

//delete card
const deleteCard = document.querySelector(".modal_type_delete");

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


//instance of card
const cardAdded = (data) =>{
  const cardInstance = new Card({data, handleCardClick: ({name, link}) => {
    imagePopup.open(link, name)}}, '.card-template')
    const cardElement = cardInstance.createCard();
    //insert into the images list
    defaultList.addItem(cardElement);
}

//popup of image
const imagePopup = new PopupWithImage(imageModal);
imagePopup.setEventListeners();
//add form
/*const newCardPopup = new PopupWithForm({
  popupSelector:addImageModal,
  popupSubmition: (data) => 
    api.addCard(data)
    .then(res => {
      const cardInstance = new Card({data, handleCardClick: ({name, link}) => {
        imagePopup.open(link, name)}}, '.card-template')
        const cardElement = cardInstance.createCard();
        //insert into the images list
        defaultList.addItem(cardElement)
    })
})*/

//close form 
/*const closeForm = new PopupWithForm({
  popupSelector: document.querySelector('.modal__close-btn')
});*/


//card list

/*const defaultList = new Section({
  items: initialCards,
  renderer: (data) => cardAdded(data)},'.elements__list');
// card list handler renders elements items
defaultList.renderItems();*/

//delete a card popup
const deleteCardPopup = new PopupWithForm({
  popupSelector: deleteCard
});
deleteCardPopup.setEventListeners();

const profileInfo = new UserInfo( profileName, profileDesc);

//api instance
const api = new Api({
  baseUrl: "https://around.nomoreparties.co/v1/group-6",
  headers: {
    authorization: "2fafb99f-e5be-44a5-8ca2-7baac5014f21",
    "Content-Type": "application/json"
  }
}); 

//dfine userId and getAppInfo method inside api.js (11.11.20)

api.getAppInfo().then(([userData, cardListData]) => {
  const defaultList = new Section({
    items: cardListData,
    renderer: addingNewCard
  }, '.elements__list')
  
  defaultList.renderItems(); 
    // card list handler renders elements items
  const newCardPopup = new PopupWithForm({
      popupSelector:addImageModal,
      popupSubmition: (data) => 
        api.addCard(data)
        .then(data => {
          const cardInstance = new Card({data, 
            handleCardClick: ({name, link}) => {
            imagePopup.open(link, name)}, 
            handleDeleteClick: (cardId) => {
              api.removeCard(cardId)
            }}, '.card-template')
            const cardElement = cardInstance.createCard();
            //insert into the images list
            defaultList.addItem(cardElement)
        })
    })
    addImageButton.addEventListener("click", () => {
      newCardPopup.open();
    });
    //add image handler
    newCardPopup.setEventListeners();
    function addingNewCard(data){
      //console.log(data);
      const cardInstance = new Card({data, 
        handleCardClick: ({name, link}) => {
        imagePopup.open(link, name)}, 
        handleDeleteClick: (cardId) => {
          deleteCardPopup.open(cardId);
          //handle click on submit button
          deleteCardPopup.deleteSubmitHandler(() => {
            //remove the card
            api.removeCard(cardId)
              .then(() => {
                cardInstance._cardDeleter(cardId);
                deleteCardPopup.close();
              })
              .catch(err => console.log('sss' ,err));
          });
          //api.removeCard(cardId)
        },
        likeHandler: (cardId) =>{
          console.log(cardInstance);

          if(cardElement.querySelector('.elements__heart').classList.contains('elements__heart_active')){
            console.log(cardInstance);

            cardElement.querySelector('.elements__heart').classList.remove('elements__heart_active');
            api.deleteLike(cardId).then(res => {
              console.log(cardInstance);
              console.log(res);
              cardInstance.showLikes(res.likes.length)
              cardInstance._likes = res.likes;
            }).catch(err => console.log(err))
          }else{
            console.log(cardInstance);
            cardInstance._cardElement.classList.toggle("elements__heart_active");

            cardElement.querySelector('.elements__heart').classList.add('elements__heart_active');
            api.addLike(cardId).then(res => {
              console.log(res);
              cardInstance.showLikes(res.likes.length)
              cardInstance._likes = res.likes;
            }).catch(err => console.log(err))
          }
        }
      },
        userData._id,'.card-template')
        const cardElement = cardInstance.createCard();
        //insert into the images list
        defaultList.addItem(cardElement)
      //  return cardAdded(data)
    }

  const profileForm = new PopupWithForm(
    {popupSelector: editProfileModal, 
      popupSubmition: () => profileInfo.setUserInfo(inputName.value, inputDesc.value)})
      //open edit info form
    editButton.addEventListener('click', () => {
      const user = profileInfo.getUserInfo();
      profileName.value = user.title; 
      profileDesc.value = user.desc; 
      profileForm.open();
    })

    //edit info  handler
    profileForm.setEventListeners();
  
}).catch(err => console.log(err));

/*api.getCardList()
.then(res => {
  const defaultList = new Section({
    items: res,
    renderer: (data) => {*/

  //},'.elements__list');


api.getUserInfo().then(res => {

  profileInfo.setUserInfo( res.name, res.about)
})

export { profileName, profileDesc, imageModal, enlargedImage }

//this.showLikes(this._likes.length);
