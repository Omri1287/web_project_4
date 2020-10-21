export default class Card{
    constructor({data, handleCardClick}, cardTemplateSelector){
        this._name = data.name;
        this._link = data.link;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
    }
    _handleDeleteCard (e){
        e.target.closest('.elements__item').remove();
        //once clicked "delete" dont go over the entire function for the clicked card
        e.stopPropagation();
    }
    _likedCard (e){
        e.target.classList.toggle("elements__heart-active");
    }

    _addEventListeners(){
        const clickLike = this._cardElement.querySelector('.elements__heart');
        const deleteCardButton = this._cardElement.querySelector('.elements__delete');
        clickLike.addEventListener("click", this._likedCard);
        //delete image
        deleteCardButton.addEventListener('click', this._handleDeleteCard);
        //Enlarging image
        this._cardElement.addEventListener('click', () =>{
            this._handleCardClick({ name: this._name, link: this._link })
        });
    }
    createCard() {
        this._cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.elements__item');
        this._cardElement = this._cardTemplate.cloneNode(true);
        this._cardElement.querySelector('.elements__title').textContent = this._name;
        this._cardElement.querySelector('.elements__image').style.backgroundImage = `url(${this._link})`;
        this._addEventListeners();
        return this._cardElement;
    }
}