import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
        this._popupImage = document.querySelector('.modal__large-image')
        this._popupTitle = document.querySelector('.modal__caption')
    }
    open(link, caption){
        super.open(link, caption);
        this._popupTitle.textContent = caption; 
        this._popupImage.src = link;
        this._popupImage.alt = caption;

    }
}

export default PopupWithImage;