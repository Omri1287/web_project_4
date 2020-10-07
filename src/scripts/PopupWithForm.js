import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor(popupElement, popupSubmition){
        super(popupElement);
        this._popupSubmition = popupSubmition;
        this._formElement = this._popupElement.querySelector(".modal__form");
    }
    _getInputValues(){

            //collects data from all the input fields.
        this._inputList = this._formElement.querySelectorAll(".modal__input");
        this._inputValues = {};
        this._inputList.forEach(input => this._inputValues[input.name] = input.value);
        return this._inputValues;
    }
    setEventListeners(){

        //close the form popup
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            this._popupSubmition(this._getInputValues());
            this.close();
          })
          super.setEventListeners();               
    }
}


const inputName = document.querySelector('.modal__input_name'); 
const inputDesc = document.querySelector('.modal__input_desc'); 
const profileName = document.querySelector('.profile__text_name'); 
const profileDesc = document.querySelector('.profile__text_desc');