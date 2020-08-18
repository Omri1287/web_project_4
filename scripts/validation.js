function showErrorMessage(input, form, {errorClass, ...rest}){
    const error = document.querySelector('#' + input.id + '-error' );
    error.textContent = input.validationMessage;
    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}
function hideErrorMessage(input, form, {errorClass, ...rest}){
    const error = document.querySelector('#' + input.id + '-error' );
    error.textContent = '';
    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

function toggleButtonState(inputs, button, {interactiveButtonClass, ...rest}){
    const isValid = inputs.every((input) => input.validity.valid);

    if(isValid){
        button.classList.remove(interactiveButtonClass);
    }
    else{
        button.classList.add(interactiveButtonClass);
    }
}

function checkInputValidity(input, form, rest){
    if(input.validity.valid){
        //hide error messsage
        hideErrorMessage(input, form, rest);
    }
    else{
        //show error message
        showErrorMessage(input, form, rest);

    }
}

function enableValidation(formSelector, inputSelector, submitButtonSelector, ...rest){
    const forms = [...document.querySelectorAll(settings.formSelector)];
    forms.forEach((form) => {
        form.addEventListner('submit', ((e) =>{
            e.preventDefault()
        }))
        const inputs = [...form.querySelectorAll(settings.inputSelector)];
        const button = form.querySelector(settings.submitButtonSelector);

        inputs.forEach((input) => {
            input.addEventListner('input', () => {
                checkInputValidity(input, form, rest);
                toggleButtonState(inputs, button, rest);
            })
        }
    })
}

// enabling validation by calling enableValidation()
// pass all the settings on call

enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__button",
    inactiveButtonClass: "modal__button_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  });