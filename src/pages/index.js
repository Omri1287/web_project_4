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

//edit profile
const editProfileModal = document.querySelector('.modal_type_edit-profile')
const editProfileForm = editProfileModal.querySelector('.modal__form')
const editButton = document.querySelector('.profile__edit-button'); 
const inputName = document.querySelector('.modal__input_name'); 
const inputDesc = document.querySelector('.modal__input_desc'); 
const profileName = document.querySelector('.profile__text_name'); 
const profileDesc = document.querySelector('.profile__text_desc'); 

//edit avatar modal
const editAvatarModal = document.querySelector('.modal_type_edit-avatar');
const saveAvatar = document.querySelector('.modal__save');
const avatarEditBtn = document.querySelector('.profile__photo_edit');
const avatarImage = document.querySelector('.profile__photo');
const avatarFormInput = document.querySelector('.modal__input_avatar-URL')
const editAvatarForm = document.querySelector('.modal__form_type_edit-avatar')


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

//instance of card
/*const cardAdded = (data) =>{
  const cardInstance = new Card({data, handleCardClick: ({name, link}) => {
    imagePopup.open(link, name)}}, '.card-template')
    const cardElement = cardInstance.createCard();
    //insert into the images list
    defaultList.addItem(cardElement);
}*/

//popup of image
const imagePopup = new PopupWithImage(imageModal);
imagePopup.setEventListeners();

//delete a card popup
const deleteCardPopup = new PopupWithForm({
  popupSelector: deleteCard
});
deleteCardPopup.setEventListeners();

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
  api.getUserInfo().then(res => {

    profileInfo.setUserInfo( res.name, res.about, res.avatar)
  })
  defaultList.renderItems(); 
    // card list handler renders elements items
    const newCardPopup = new PopupWithForm({
      popupSelector:addImageModal,
      popupSubmition: (data) => {
      loadingPopup(true, addImageModal)
      api.addCard(data)
      .then((res) => {
        console.log(res);
        //instance of card
        addingNewCard(res);
        newCardPopup.close();
        loadingPopup(false, addImageModal)
      })
      //loadingPopup(true, addImageModal)
      .catch(err => console.log(err))
      }
    })
    addImageButton.addEventListener("click", () => {
      newCardPopup.open();
      loadingPopup(false, addImageModal);
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
          deleteCardPopup.setSubmitHandler(() => {
            //remove the card
            api.removeCard(cardId)
              .then(() => {
                cardInstance._cardDeleter(cardId);
                deleteCardPopup.close();
              })
              .catch(err => console.log(err));
          });
          //api.removeCard(cardId)
        },
        likeHandler: (cardId) =>{ 
          //console.log(cardInstance); 
 
          if(cardElement.querySelector('.elements__heart').classList.contains('elements__heart_active')){ 
            //console.log(cardInstance); 
 
            api.deleteLike(cardId).then(res => { 
              cardElement.querySelector('.elements__heart').classList.remove('elements__heart_active'); 
              //console.log(cardInstance); 
              //console.log(res); 
              cardInstance.showLikes(res.likes.length) 
              cardInstance._likes = res.likes; 
            }).catch(err => console.log(err)) 
          }else{ 
            cardInstance._cardElement.classList.toggle("elements__heart_active"); 
            api.addLike(cardId).then(res => { 
              cardElement.querySelector('.elements__heart').classList.add('elements__heart_active'); 
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
        loadingPopup(true, addImageModal);
      //  return cardAdded(data) 
    }
  //edit profile info   
  const profileInfo = new UserInfo( profileName, profileDesc, avatarImage);
  const profileForm = new PopupWithForm(
    {popupSelector: editProfileModal, 
      popupSubmition: (data) => {
        loadingPopup(true, editProfileModal);
        api.setUserInfos({name: data.title, about:data.desc})
        .then(res => {
          loadingPopup(false, editProfileModal)
          profileInfo.setUserInfo(res.name, res.about)
          profileForm.close();
          console.log(res)
        })
        /*.then(res =>{
          profileForm.close();
          console.log(res)
        })*/
        .catch(err => console.log(err))
      }
    })

    //edit info  handler
    profileForm.setEventListeners();
      //open edit info form
    editButton.addEventListener('click', () => {
      profileForm.open();
      const user = profileInfo.getUserInfo();
      inputName.value = user.title; 
      inputDesc.value = user.desc; 
    })
}).catch(err => console.log(err));

//avatar handler
function handleAvatarEdit(data) {
  loadingPopup(true, editAvatarModal);
  api.setUserAvatar({
    avatar: data.avatarURL
  })
  .then(res => {
    avatarImage.src = res.avatar;
    loadingPopup(false, editAvatarModal);
    editAvatar.close();
  })
  .catch(err => console.log(err));
}

function loadingPopup(isLoading, popup) {
  if (isLoading) {
    popup.querySelector(".modal__save").textContent = "Saving...";
  } else {
    popup.querySelector(".modal__save").textContent = "Save";
  }
}

// edit profile avatar
const editAvatar = new PopupWithForm({
  popupSelector: editAvatarModal,
  popupSubmition: (data) => {
    handleAvatarEdit(data)
    }
});
   
avatarEditBtn.addEventListener("click", () => {
  editAvatar.open();
});

editAvatar.setEventListeners();

export { profileName, profileDesc, imageModal, enlargedImage, avatarImage }

//validations

const addFormValidator = new FormValidator(defaultConfig, addCardForm);
const editFormValidator = new FormValidator(defaultConfig, editProfileForm);
const editAvatarValidator = new FormValidator(defaultConfig, editAvatarForm);
editFormValidator.enableValidation();
addFormValidator.enableValidation();
editAvatarValidator.enableValidation();
