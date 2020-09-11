const imageModal = document.querySelector('.modal_type_image');
const imageModalCaption = imageModal.querySelector('.modal__caption');

const imageModalEnlarge = imageModal.querySelector('.modal__large-image');
const cardTemplate = document.querySelector('.card-template').content.querySelector('.elements__item');

const cardElement = cardTemplate.cloneNode(true);
const cardImage = cardElement.querySelector('.elements__image');

//Enlarging image
  cardImage.addEventListener('click', () => {
    //enlarging the chosen url
    imageModalEnlarge.setAttribute('src', data.link);
    //caption of the chosen link name
    imageModalCaption.textContent = data.name;
    imageModalEnlarge.setAttribute('alt', data.name)
    //enlarging the image once clicked on
    toggleModalWindow(imageModal);
  })

export default class Card{
    constructor(data,cardTemplateSelector){
        this._text = data.text;
        this._link = data.link;
        this._data = data;
        this._cardTemplate = cardTemplate;
        this._cardTemplate = document.querySelector(cardTemplateSelector).content.querySelector('.elements__item');

    }

    _addEventListeners(){
        const cardImage = this._card.querySelector('.elements__image');
        const clickLike = this._card.querySelector('.elements__heart');
        const deleteCardButton = this._card.querySelector('.elements__delete');
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
            imageModalEnlarge.setAttribute('alt', data.name)
            //enlarging the image once clicked on
            toggleModalWindow(imageModal);
        })
    }

    createCard() {

        this._card = this._cardTemplate.cloneNode(true);
        const cardTitle = this._card.querySelector('.elements__title');

    
        // receive image name and image url for the card
        cardTitle.textContent = this._data.name;
        cardImage.style.backgroundImage = `url(${this._data.link})`;
        //like button
    

    
        return this._card;
    }
}
    
const card = new Card({text:'123', link: 'src'}, '.card-template')
card.createCard();