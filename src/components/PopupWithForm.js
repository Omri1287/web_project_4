import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, popupSubmition}){
        super(popupSelector);
        this._popupSubmition = popupSubmition;
        this._formElement = this._popupSelector.querySelector(".modal__form");
    }
    _getInputValues(){
        console.log(this._inputValues);
        console.log(this._inputList);
            //collects data from all the input fields.
        //this._inputList = this._formElement.querySelectorAll(".modal__input");
        this._inputList = Array.from(this._formElement.querySelectorAll(".modal__input"))
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