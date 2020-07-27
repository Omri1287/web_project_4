

//edit profile
const editProfileModal = document.querySelector('.modal_type_edit-profile')

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
const closeAddImage = addImageModal.querySelector('.modal__close-btn_type_add-image');
const addImageSubmit = addImageModal.querySelector('.modal__save');

//image
const imageModal = document.querySelector('.modal_type_image');
const closeImageModal = imageModal.querySelector('.modal__close-btn_type_image');
 


//like button
const clickLike = document.getElementsByClassName('elements__heart');

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
      name: "Vanois National Park",
      link: "https://code.s3.yandex.net/web-code/vanois.jpg"
  },
  {
      name: "Lago di Braies",
      link: "https://code.s3.yandex.net/web-code/lago.jpg"
  }
];

//functions 
function toggleModalWindow(modal){ 
  modal.classList.toggle('modal_is-open'); 
} 


 editButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})
addImageButton.addEventListener('click', () => {
  toggleModalWindow(addImageModal);
})
imageModal.addEventListener('click', () => {
  toggleModalWindow(imageModal);
})
function formSubmitHandler(e){

    e.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileDesc.textContent = inputDesc.value; 
    toggleModalWindow(editProfileModal);
} 

editForm.addEventListener('submit', formSubmitHandler);

addImageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const imageTitleInput = addImageForm.querySelector('.modal__input_image-name');
  const imageUrlInput = addImageForm.querySelector('.modal__input_url'); 
  createCard({name: imageTitleInput.value, link: imageUrlInput.value});
  toggleModalWindow(addImageModal);
});
const cardTemplate = document.querySelector('.card-template').content.querySelector('.elements__item');

function createCard(name, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__title');
  const cardLikeButton = cardElement.querySelector('.elements__heart');
  const deleteCardButton = cardElement.querySelector('.elements__delete');
  cardTitle.textContent = name;
  cardImage.style.backgroundImage = 'url(' + link + ')';

  cardImage.addEventListener('click', () => {
    toggleModalWindow(imageModal);
  })
  likeButon.addEventListener('click', () => {
    for(let i = 0; i < clickLike.length; i++){
      clickLike[i].addEventListener("click", function(e){
        e.target.classList.toggle("elements__heart-active");
    })};
  });
  deleteCardButton.addEventListener('click', () => {

  });
  return cardElement;
}

editCloseButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})

closeAddImage.addEventListener('click', () => {
  toggleModalWindow(addImageModal);
})
closeImageModal.addEventListener('click', () => {
  toggleModalWindow(closeImageModal);
})

  /*for(let i = 0; i < clickLike.length; i++){
    clickLike[i].addEventListener("click", function(e){
      e.target.classList.toggle("elements__heart-active");
      toggleModalWindow(clickLike)
  });}*/

const list = document.querySelector('.elements');

/*initialCards.forEach((data) => {
  const cardItem = createCard(data.name, data.link)
  list.prepend(cardItem);
});*/