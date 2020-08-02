

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
const addImageTitle = addImageModal.querySelector('.modal__input_image-name');
const addImageUrl = addImageModal.querySelector('.modal__input_url');
const addImageSubmit = addImageModal.querySelector('.modal__save_type_add-image');

//image enlarged
const imageModal = document.querySelector('.modal_type_image');
const closeImageModal = imageModal.querySelector('.modal__close-btn_type_image');
const imageModalFormer = document.querySelectorAll('.elements__image');
const modalImg = document.getElementById("img-large");
const imageModalEnlarge = imageModal.querySelector('.modal__large-image');
const imageModalCaption = imageModal.querySelector('.modal__caption');
//new images template
const cardTemplate = document.querySelector('.card-template').content.querySelector('.elements__item');


//like button
//list of originl images
const list = document.querySelector('.elements');

//original images (not sure why i need it)
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

//functions 
//open the modal
function toggleModalWindow(modal){ 
  modal.classList.toggle('modal_is-open'); 
} 

//open the edit profile modal
 editButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})
//close the edit profile modal
editCloseButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})

//open the add image modal
addImageButton.addEventListener('click', (createCard) => {
  toggleModalWindow(addImageModal);
})

//close the add image modal
closeAddImage.addEventListener('click', () => {
  toggleModalWindow(addImageModal);
})
//enlarge image


//close enlarged image
closeImageModal.addEventListener('click', () => {
  toggleModalWindow(imageModal);
})

//handle edit profile form
const formSubmitHandler = (e) => {

    e.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileDesc.textContent = inputDesc.value; 
    toggleModalWindow(editProfileModal);
} 
//submit edit profile form
editForm.addEventListener('submit', formSubmitHandler);


const addImageHandler = (e) => {
  e.preventDefault();
  const cardElement = createCard(addImageTitle.value, addImageUrl.value);
  list.prepend(cardElement);
  toggleModalWindow(addImageModal);
};



  //go through images
  function renderImage(data) {
    list.prepend(createCard(data));
  }
  initialCards.forEach((data) => {
    renderImage(data)
  })
//create a new card
function createCard(e) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__title');
  const clickLike = cardElement.querySelector('.elements__heart');
  const deleteCardButton = cardElement.querySelector('.elements__delete');

  // image name and image url
  cardTitle.textContent = e.name;
  cardImage.style.backgroundImage = `url(${e.link})`;
  //like button

  clickLike.addEventListener("click", function(e){
    e.target.classList.toggle("elements__heart-active");
  });
    //delete image

  deleteCardButton.addEventListener('click', (e) => {
    cardElement.remove();
    e.stopPropagation();
    });
  //Enlarging image
  cardElement.addEventListener('click', () => {
    imageModalEnlarge.setAttribute('src', e.link);
    imageModalEnlarge.setAttribute('alt', e.name);
    imageModalCaption.textContent = e.name;
    toggleModalWindow(imageModal);
  })
//adding the new item into the DOM
  const cardItem = document.querySelector('.elements__item');
  if (cardItem) {
    const img = document.createElement("img");
    const cap = document.createElement('cap')
    img.classList.add('elements__image-container');
    cap.classList.add('elements__container')
    cardItem.appendChild(img);
    cardItem.appendChild(cap);
  }

  return cardElement;
}


addImageSubmit.addEventListener('submit', function(e) {
  e.preventDefault(); 
  createCard(e);
});
addImageForm.addEventListener('submit', addImageHandler);



imageModalEnlarge.onclick = function(){
  imageModal.style.display = "block";
  modalImg.src = this.src;
  imageModalCaption.innerHTML = this.alt;
}