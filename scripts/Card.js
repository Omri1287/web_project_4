import {toggleModalWindow} from './index.js'

export default class Card{
    constructor(data,cardTemplateSelector){
        //this._text = data.text;
        //this._link = data.link;
        this._data = data;
        this._cardTemplateSelector = cardTemplateSelector;
    }
    _handleDeleteCard (e){
        e.target.closest('.elements__item').remove();
        //once clicked "delete" dont go over the entire function for the clicked card
        e.stopPropagation();
    }
    _likedCard (e){
        e.target.classList.toggle("elements__heart-active");
    }
    _enlargeCard(e){
        const imageModal = document.querySelector('.modal_type_image');
        const imageModalCaption = imageModal.querySelector('.modal__caption');
        const imageModalEnlarge = imageModal.querySelector('.modal__large-image');
        //enlarging the chosen url
        imageModalEnlarge.src = this._data.link;
        //caption of the chosen link name
        imageModalCaption.textContent =  this._data.name;
        imageModalEnlarge.setAttribute('alt', this._data.name)
        //enlarging the image once clicked on
        toggleModalWindow(imageModal);
    }
    _addEventListeners(){
        const clickLike = this._cardElement.querySelector('.elements__heart');
        const deleteCardButton = this._cardElement.querySelector('.elements__delete');
        clickLike.addEventListener("click", this._likedCard);
        //delete image
        deleteCardButton.addEventListener('click', this._handleDeleteCard);
        //Enlarging image
        this._cardImage.addEventListener('click', this._enlargeCard.bind(this));
    }
    createCard() {
        this._cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.elements__item');
        this._cardElement = this._cardTemplate.cloneNode(true);
        this._cardImage = this._cardElement.querySelector('.elements__image');
        this._cardTitle = this._cardElement.querySelector('.elements__title');
        // receive image name and image url for the card
        this._cardTitle.textContent = this._data.name;
        this._cardImage.style.backgroundImage = `url(${this._data.link})`;
        this._addEventListeners();
        return this._cardElement;
    }
}
    
