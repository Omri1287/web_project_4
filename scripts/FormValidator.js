
export default class FormValidator{
    constructor(settings, formElement){
        this._settings = settings;
        this._formElement = formElement;
    }
    _showErrorMessage (input, form, errorClass, inputErrorClass){
        const error = this._formElement.querySelector('#' + input.id + '-error');
        error.textContent = input.validationMessage;
        error.classList.add(this._settings.errorClass);
        input.classList.add(this._inputErrorClass);
    }

    _hideErrorMessage(){
        const error = this._formElement.queryselector('#' + input.id + '-error');
        error.classList.remove(this._settings.errorClass);
        input.classList.remove(this._settings.inputErrorClass);
        error.textContent = '';

    }
    _toggleButtonState(inputs, button, inactiveButtonClass){
        const isValid = inputs.every((input) => input.validity.valid);
        const submitButtonSelector = document.querySelector('.modal__save');
    
    
        if(isValid){
            button.classList.remove(inactiveButtonClass);
            submitButtonSelector.removeAttribute("disabled");
    
        }
        else{
            button.classList.add(inactiveButtonClass);
            submitButtonSelector.setAttribute("disabled", true);
    
        }
    }
    _checkInputValidity(input, form, errorClass, inputErrorClass){
        if(input.validity.valid){
            //hide error messsage
            this._hideErrorMessage(this._formElement, input, errorClass, inputErrorClass);
        }
        else{
            //show error message
            this._showErrorMessage(this._formElement, input, errorClass, inputErrorClass);
    
        }
    };
    _setEventListeners(){
        const inputs = [...this._formElement.querySelectorAll(this._settings.inputSelector)];
        const button = this._formElement.querySelector(this._settings.submitButtonSelector);

        inputs.forEach(input => {
            input.addEventListener('input', () => {
              this._checkInputValidity(input);
              this._toggleButtonState(inputs, button);
            })
        })
    }
    _enableValidation(){
            this._formElement.addEventListener('submit', (e) => {
                e.preventDefault();
            });
            this._setEventListeners();

    }    
}
const defaultConfig = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__save_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
}

const editForm = document.querySelector('.modal_type_edit-profile .modal__form')

const formValidator = new FormValidator(defaultConfig, editForm) 