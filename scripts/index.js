

//edit profile
const editProfileModal = document.querySelector('.modal_type_edit-profile')

const editButton = document.querySelector('.profile__edit-button'); 
const editCloseButton = document.querySelector('.modal__close-btn_type_edit-profile'); 
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

//image enlarged
const imageModal = document.querySelector('.modal_type_image');
const closeImageModal = imageModal.querySelector('.modal__close-btn_type_image');
const modalImg = document.getElementById("img-large");
const imageModalEnlarge = imageModal.querySelector('.modal__large-image');
const imageModalCaption = imageModal.querySelector('.modal__caption');


//new images template
const cardTemplate = document.querySelector('.card-template').content.querySelector('.elements__item');


//like button
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

//functions 
//open  modal
function toggleModalWindow(e){ 
  e.classList.toggle('modal_is-open'); 
} 
//close modal
function toggleModalWindowClose(e){
  e.classList.remove('modal_is-open'); 
}

//open the edit profile modal
 editButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})
//close the edit profile modal by clicking on the close btn
editProfileModal.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})
editCloseButton.addEventListener('click', () => {
  toggleModalWindow(editProfileModal);
})
//close the edit profile modal by clicking anywhere but the window
editProfileModal.addEventListener('click', (event) => {
  if(event.target !== event.currentTarget){
    toggleModalWindow(editProfileModal);
  }
});
//close the edit profile modal by clicking escape button
document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape'){
    toggleModalWindowClose(editProfileModal);
  }
})


//open the add image modal
addImageButton.addEventListener('click', () => {
  toggleModalWindow(addImageModal);
})

//close the add image modal by clicking on the close btn
closeAddImage.addEventListener('click', () => {
  toggleModalWindow(addImageModal);
})
//close the add image modal by clicking anywhere but the window
addImageModal.addEventListener('click', () => {
  toggleModalWindow(addImageModal);
})
addImageModal.addEventListener('click', (event) => {
  if(event.target !== event.currentTarget){
    toggleModalWindow(addImageModal);
  }
});
//close the add image modal by clicking escape button
document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape'){
    toggleModalWindowClose(addImageModal);
  }
})

//close and open enlarged image by clicking on the close btn
closeImageModal.addEventListener('click', () => {
  toggleModalWindow(imageModal);
})
//close the enlarged image by clicking anywhere but the image
imageModal.addEventListener('click', () => {
  toggleModalWindow(imageModal);
})
imageModal.addEventListener('click', (event) => {
  if(event.target !== event.currentTarget){
    toggleModalWindow(imageModal);
  }
});


//close and open enlarged image by clicking escape button
document.addEventListener('keydown', function(e) {
  if(e.key === 'Escape'){
    toggleModalWindowClose(imageModal);
  }
})
//dont close the modal when it's being clicked on


//handle edit profile form
const formSubmitHandler = (e) => {
    e.preventDefault(); 
    profileName.textContent = inputName.value; 
    profileDesc.textContent = inputDesc.value; 
    toggleModalWindow(editProfileModal);
} 
//submit edit profile form
editForm.addEventListener('submit', formSubmitHandler);


  //go through images list and create the cards from the list
  function renderImage(data) {
    list.prepend(createCard(data));
  }
  initialCards.forEach((data) => {
    renderImage(data)
  })

//create a new card
function createCard(data) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardImage = cardElement.querySelector('.elements__image');
  const cardTitle = cardElement.querySelector('.elements__title');
  const clickLike = cardElement.querySelector('.elements__heart');
  const deleteCardButton = cardElement.querySelector('.elements__delete');

  // receive image name and image url for the card
  cardTitle.textContent = data.name;
  cardImage.style.backgroundImage = `url(${data.link})`;
  //like button

  clickLike.addEventListener("click", function(e){
    e.target.classList.toggle("elements__heart-active");
  });
    //delete image

  deleteCardButton.addEventListener('click', (e) => {
    cardElement.remove();
    //once clicked "delete" dont go over the entire function for the clicked card
    e.stopPropagation();
    });
  //Enlarging image
  cardImage.addEventListener('click', () => {
    //enlarging the chosen url
    imageModalEnlarge.setAttribute('src', data.link);
    //caption of the chosen link name
    imageModalCaption.textContent = data.name;
    //enlarging the image once clicked on
    toggleModalWindow(imageModal);
  })


  return cardElement;
}



//new image handler 

const addImageHandler = (e) => {
  e.preventDefault();
  const cardElement = createCard({
    name: addImageTitle.value, link: addImageUrl.value
  });
  //insert into the images list
  list.prepend(cardElement);
  //close the modal window once clicked "submit"
  toggleModalWindow(addImageModal);
};
//add new image once pressed 'submit'
addImageForm.addEventListener('submit', addImageHandler);


