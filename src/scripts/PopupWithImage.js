import Popup from './Popup.js';

class PopupWithImage extends Popup {
    constructor(popupSelector){
        super(popupSelector);
    }
    open(link, caption){
        this._popupSelector.querySelector('.modal__large-image').src = link;
        this._popupSelector.querySelector('.modal__caption').src = caption;
        super.open();
    }
}

export default PopupWithImage;