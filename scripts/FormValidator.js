

export default class FormValidator{
    constructor(settings, formElement){
        this._settings = settings;
        this._formElement = formElement;
    }
    _showErrorMessage (input){
        const error = this._formElement.querySelector('#' + input.id + '-error');
        const errorClass =  this._formElement.querySelector(".modal__error_visible");
        const inputErrorClass =  document.querySelector(".modal__input_type_error");

        console.log(input);
        console.log(error);
        console.log(this._formElement);
        console.log(input.id);
        error.textContent = input.validationMessage;
        error.classList.add(errorClass);
        input.classList.add(inputErrorClass);

    }

    _hideErrorMessage(input){
        const error = this._formElement.querySelector('#' + input.id + '-error');
        const errorClass =  this._formElement.querySelector(".modal__error_visible");
        const inputErrorClass = document.querySelector(".modal__input_type_error");

        error.classList.remove(errorClass);
        input.classList.remove(inputErrorClass);
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
        const inputs = [...this._formElement.querySelectorAll(this._settings.inputSelector)];
        const button = this._formElement.querySelector(this._settings.submitButtonSelector);
        inputs.forEach(input => {
            input.addEventListener('input', () => {
              this._checkInputValidity(input);
              this._toggleButtonState(inputs, button);
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

const defaultConfig = {
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__save_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
}

const editForm = document.querySelector('.modal_type_edit-profile .modal__form')

const formValidator = new FormValidator(defaultConfig, editForm); 

