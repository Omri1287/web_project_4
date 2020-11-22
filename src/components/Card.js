import Api from "./Api";

export default class Card{
    constructor({data, handleCardClick, handleDeleteClick, likeHandler}, userId, cardTemplateSelector){
        this._name = data.name;
        this._link = data.link;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
        this._userId = userId;
        this._likes = data.likes;
        this._likeHandler = likeHandler;
        this._id = data._id;
        this._handleDeleteClick = handleDeleteClick;
    }

    id(){
        return this._id;
    }

    _cardDeleter (cardId){
        const cardElement = document.getElementById(cardId);
        if(cardElement){
            cardElement.parentNode.removeChild(cardElement);
        }
        this._cardElement = null;
    }
    _likedCardRenderer (){
        //console.log(this._likes);
        if (this._likes.some((like) => like._id === this._userId)) {
            this._cardElement.querySelector(".elements__heart").classList.add("elements__heart_active");
          }
    }
    showLikes(count){
        this._cardElement.querySelector(".elements__heart-count").textContent = count;
    }
    _addEventListeners(){

        this._cardElement.querySelector('.elements__delete').addEventListener("click", () => {
            this._handleDeleteClick(this.id())},{once : true});

        //Enlarging image
        this._cardImage.addEventListener('click', (e) =>{
            if(e.target === this._cardImage){
            this._handleCardClick({ name: this._name, link: this._link })}
        });
        this._cardElement.querySelector(".elements__heart").addEventListener("click", (evt) => {
            this._likeHandler(this._id);
          })
    }
    createCard() {
        this._cardTemplate = document.querySelector(this._cardTemplateSelector).content.querySelector('.elements__item');
        this._cardElement = this._cardTemplate.cloneNode(true);
        this._cardTitle = this._cardElement.querySelector('.elements__title')
        this._cardImage = this._cardElement.querySelector('.elements__image')
        this._cardTitle.textContent = this._name;
        this._cardImage.style.backgroundImage = `url(${this._link})`;
        this._likedCardRenderer();
        this._addEventListeners();
        this.showLikes(this._likes.length);
        this._cardElement.id = this._id; 
        return this._cardElement;
    }
}