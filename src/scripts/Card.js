


export default class Card{
    constructor({data, handleCardClick}, cardTemplateSelector){
        this._name = data.name;
        this._link = data.link;
        //this._data = data;
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
    /*_enlargeCard(e){
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
    }*/
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
        /*this._cardImage = this._cardElement.querySelector('.elements__image');
        this._cardTitle = this._cardElement.querySelector('.elements__title');
        this._cardImage =
        this._cardImage =
        enlargedImage.src = this._name.link;
        enlargedImage.setAttribute('alt', this._data.name);

        // receive image name and image url for the card
        this._cardTitle.textContent = this._data.name;
        this._cardImage.style.backgroundImage = `url(${this._data.link})`;
        this._addEventListeners();
        return this._cardElement;*/
    }
}
    
/*const enlargedImage = new PopupWithImage('.modal_type_image');
enlargedImage.setEventListeners();*/

/*new Card (
    {
        data:{...},
        handleCardClick:(name, link) =>{
            enlargedImage.open(name, link);
        },
    }
 )*/