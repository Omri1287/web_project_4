import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor({popupSelector, popupSubmition}){
        super(popupSelector);
        this._popupSubmition = popupSubmition;
        this._formElement = this._popupSelector.querySelector(".modal__form");
        //this.cbFunction = null;
    }
    close() {
        super.close();
        this._formElement.reset();
      }
    _getInputValues(){

        this._inputList = Array.from(this._formElement.querySelectorAll(".modal__input"))
        this._inputValues = {};
        this._inputList.forEach(input => this._inputValues[input.name] = input.value);
        return this._inputValues;
    }
    /*setEventListeners(){

        //close the form popup
        this._formElement.addEventListener("submit", (e) => {
            e.preventDefault();
            if(e.target.id === 'deleteCard'){
                this.cbFunction();
                this.cbFunction = null;
            } else {
                this._popupSubmition(this._getInputValues());
            }
            this.close();
          })
          super.setEventListeners();               
    }
    deleteSubmitHandler(cbFunction) {
            this.cbFunction = cbFunction;
       }*/
       setEventListeners() {
        super.setEventListeners(); //call from popup class
    
        //add submit handler to a form
        this._formElement.addEventListener("submit", (event) => {
          event.preventDefault();
          this._popupSubmition(this._getInputValues());
          //this.close();
        });
      }
    
      //delete card handler
      setSubmitHandler(event) {
        this._popupSubmition = event;
      }
}