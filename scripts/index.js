/*const modal = document.querySelector('.modal');
//modal types
const editProfileModal = document.querySelector('.modal_type_edit-profile')
const addImageModal = document.querySelector('.modal_type_add-image')
const imageModal = document.querySelector('.modal_type_image')
//buttons
const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.modal__close-btn');
const addCardSubmitButton = editForm.querySelector('.modal__save');
const closeAddCardButton = addCardModal.querySelector('.modal__close-btn');
const addCardButtonOpenModal = document.querySelector('.profile__add-button');
const closeImageModalButton = imageModal.querySelector('.modal__close-btn');


//forms
const editForm = editProfileModal.querySelector('.modal__form');
const addCardForm = addCardModal.querySelector('.modal__form');

//form inputs

const inputName = document.querySelector('.modal__input_name');
const inputDesc = document.querySelector('.modal__input_desc');
const clickLike = document.getElementsByClassName('elements__heart');
const profileName = document.querySelector('.profile__text_name');
const profileDesc = document.querySelector('.profile__text_desc');






addCardButtonOpenModal.addEventListener('click', () =>{
  toggleModalWindow(addCardModal);
});

closeAddCardButton.addEventListener('click', () {
  toggleModalWindow(addCardModal);
});

closeImageModal.addEventListener('click', () {
  toggleModalWindow(imageModal);
});

function toggleModalWindow(){
    modal.classList.toggle('modal_is-open');
}
for(var i = 0; i < clickLike.length; i++){
clickLike[i].addEventListener("click", function(e){
  e.target.classList.toggle("elements__heart-active");
});}
editButton.addEventListener('click', () => {
  const profileName = inputName.textContent.trim();
  const profileDesc = inputDesc.textContent;

  inputName.value = profileName;
  inputDesc.value = profileDesc;
  toggleModalWindow(editProfileModal);
});


closeButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
});

editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    profileName.textContent = inputName.value;
    profileDesc.textContent = inputDesc.value;
    toggleModalWindow(editProfileModal);
} )

addCardForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const cardTitleInput = addCardForm.querySelector('.modal__input_name');
  const cardUrlInput = addCardForm.querySelector('.modal__input_url');

  createCard({name: cardTitleInput.value, link: cardUrlInput.value});
  toggleModalWindow(addCardModal);
})

const initialCards = [
    {
      name: "Yosemite Valley",
      link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
    },
    {
      name: "Lake Louise",
      link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
    },
    {
      name: "Bald Mountains",
      link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
    },
    {
      name: "Latemar",
      link: "https://code.s3.yandex.net/web-code/latemar.jpg"
    },
    {
      name: "Vanoise National Park",
      link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
    },
    {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
    }
  ];
const list = document.querySelector('.elememts');
  
const cardTemplate = document.querySelector('.card-template').content.querySelector('a');


function createCard(data){
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardLikeButton = cardElement.querySelector('.card__like-button');
  const cardDeleteCardButton = cardElement.querySelector('.card__delete-button'); 
  cardTitle.textContent = data.name; 
  cardImage.style.background = 'url(' + data.link + ')';
  cardDeleteCardButton.addEventListener('click', () => {
     //remove card
  });
  cardLikeButton.addEventListener('click', () => {
     //toggle heart state
  });
  cardImage.addEventListener('click', () => {
    toggleModalWindow(imageModal);
     //open image modal 
  });

  return cardElement;
}


  initialCards.forEach((data) => {

    list.prepend(createCard(data));
  });*/

  //edit button



/*//modal types
//buttons
const closeAddCardButton = addCardModal.querySelector('.modal__close-btn');
//const closeImageModalButton = imageModal.querySelector('.modal__close-btn');


//forms

//form inputs

/*
const editProfileModal = document.querySelector('.modal__type_edit-profile')
const editButton = document.querySelector('.profile__edit-button');
const editProfileCloseButton = editProfileModal.querySelector('.modal__close-btn_type_edit-profile');
const modal = document.querySelector('.modal');
const editForm = editProfileModal.querySelector('.modal__form_type_edit-profile');
const inputName = editForm.querySelector('.modal__input_name');
const inputDesc = editForm.querySelector('.modal__input_desc');
const profileName = document.querySelector('.profile__text_name');
const profileDesc = document.querySelector('.profile__text_desc');

const clickLike = document.getElementsByClassName('elements__heart');
const imageModal = document.querySelector('.modal__type_image')
const addCardSubmitButton = editForm.querySelector('.modal__save');
const addCardForm = addCardModal.querySelector('.modal__form');

function toggleModalWindow(modal){
  modal.classList.toggle('modal_is-open');
}

editButton.addEventListener('click', () => {

  toggleModalWindow(editProfileModal);
  editForm.reset();

});
editForm.addEventListener('submit', (evt) => {

  evt.preventDefault();

  profileName.textContent = inputName.value;
  profileDesc.textContent = inputDesc.value;

  toggleModalWindow(editProfileModal);
  editForm.reset();

});
editProfileCloseButton.addEventListener('click', () =>{
toggleModalWindow(editProfileModal);
});

addCardButtonOpenModal.addEventListener('click', () =>{
  toggleModalWindow(addCardModal);
});
closeAddCardButton.addEventListener('click', () =>{
  toggleModalWindow(addCardModal);
});


editProfileCloseButton.addEventListener('click', () =>{
  toggleModalWindow(editProfileModal);
});


for(let i = 0; i < clickLike.length; i++){
  clickLike[i].addEventListener("click", function(e){
    e.target.classList.toggle("elements__heart-active");
  });}



const list = document.querySelector('.elements');

initialCards.forEach((data) => {
  const cardTemplate = document.querySelector('.card-template').textContent.querySelector('.elements__item');
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__title');
  const cardLikeButton = cardElement.querySelector('.elements__heart');
  const cardDeleteCardButton = cardElement.querySelector('.elements__delete');

  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = 'url(' + data.link + ')';

  cardDeleteCardButton.addEventListener('click', () => {
    //delete card
  })
  cardLikeButton.addEventListener('click', () => {
    //toggle heart state
  })
  cardImage.addEventListener('click', () => {
    //toggle image modal
  })
  list.prepend(cardElement);
}); */

//edit profile
const editProfileModal = document.querySelector('.modal__type_edit-profile')

const editButton = document.querySelector('.profile__edit-button'); 
const editCloseButton = document.querySelector('.modal__close-btn_type_edit-profile'); 
const modal = document.querySelector('.modal'); 
const editForm = editProfileModal.querySelector('.modal__form'); 
const inputName = document.querySelector('.modal__input_name'); 
const inputDesc = document.querySelector('.modal__input_desc'); 
 
const profileName = document.querySelector('.profile__text_name'); 
const profileDesc = document.querySelector('.profile__text_desc'); 

//add image 
const addImageButton = document.querySelector('.profile__add-button');

const addImageModal = document.querySelector('.modal_type_add-image');
const addImageForm = addImageModal.querySelector('.modal__form');
//const addImageTitleInput = document.querySelector(".modal__input_image-name");
//const addImageUrlInput = document.querySelector(".modal__input_url");
//const closeAddImage = addImageModal.querySelector('.modal__close-btn_type_add-image');

//image
const imageModal = document.querySelector('.modal_type_image');

//like button
const clickLike = document.getElementsByClassName('elements__heart');

//functions 
function toggleModalWindow(){ 
    modal.classList.toggle('modal_is-open'); 
} 
 
 addImageButton.addEventListener('click', () => {
   toggleModalWindow(addImageModal);
 })

function formSubmitHandler(e){

    e.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileDesc.textContent = inputDesc.value; 
    toggleModalWindow(editProfileModal);
} 
editForm.addEventListener('submit', formSubmitHandler);
editButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})
editCloseButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})
for(let i = 0; i < clickLike.length; i++){
  clickLike[i].addEventListener("click", function(e){
    e.target.classList.toggle("elements__heart-active");
  });}
