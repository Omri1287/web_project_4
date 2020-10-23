export default class FormValidator{
    constructor(settings, formElement){
        this._settings = settings;
        this._formElement = formElement;
        this._inactiveButtonClass = settings.inactiveButtonClass;
    }
    _showErrorMessage (input){
        const error = this._formElement.querySelector('#' + input.id + '-error');
        const errorClass =  this._formElement.querySelector(".modal__error_visible");
        const inputErrorClass =  document.querySelector(".modal__input_type_error");
        error.textContent = input.validationMessage;
        error.classList.add(this._settings.errorClass);
        input.classList.add(this._settings.inputErrorClass);

    }

    _hideErrorMessage(input){
        const error = this._formElement.querySelector('#' + input.id + '-error');
        const errorClass =  this._formElement.querySelector(".modal__error_visible");
        const inputErrorClass = document.querySelector(".modal__input_type_error");

        error.classList.remove(this._settings.errorClass);
        input.classList.remove(this._settings.inputErrorClass);
        error.textContent = '';

    }
    _toggleButtonState(inputs, button) {
        const isValid = inputs.every((input) => input.validity.valid);
        const submitButtonSelector = document.querySelector('.modal__save');
        if (isValid) {
    
          button.classList.remove(this._inactiveButtonClass);
          submitButtonSelector.removeAttribute("disabled");
        } else {
          button.classList.add(this._inactiveButtonClass);
    
          submitButtonSelector.setAttribute("disabled", true);
        }
      }
    
    _checkInputValidity(input){
        if(input.validity.valid){
            //hide error messsage
            this._hideErrorMessage(input);
        }
        else{
            //show error message
            this._showErrorMessage(input);
    
        }
    };
    _setEventListeners(){
        const inputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
        const button = this._formElement.querySelector(this._settings.submitButtonSelector);

        inputs.forEach(input => {
            input.addEventListener('input', () => {
              this._checkInputValidity(input);
              this._toggleButtonState(inputs,button);
            })
        })
    }

    enableValidation(){
            this._formElement.addEventListener('submit', (e) => {
                e.preventDefault();
            });
            this._setEventListeners();

    }    
}


