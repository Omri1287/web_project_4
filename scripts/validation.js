const submitButtonSelector = document.querySelector('.modal__save');


function showErrorMessage(input, form, errorClass, inputErrorClass){
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = input.validationMessage;
    error.classList.add(errorClass);
    input.classList.add(inputErrorClass);
}
function hideErrorMessage(input, form, errorClass, inputErrorClass){
    const error = document.querySelector('#' + input.id + '-error');
    error.textContent = '';
    error.classList.remove(errorClass);
    input.classList.remove(inputErrorClass);
}

function toggleButtonState(inputs, button, inactiveButtonClass){
    const isValid = inputs.every((input) => input.validity.valid);

    if(isValid){
        button.classList.remove(inactiveButtonClass);
        submitButtonSelector.removeAttribute("disabled");

    }
    else{
        button.classList.add(inactiveButtonClass);
    }
}


function checkInputValidity(input, form, errorClass, inputErrorClass){
    if(input.validity.valid){
        //hide error messsage
        hideErrorMessage(input, form, errorClass, inputErrorClass);
    }
    else{
        //show error message
        showErrorMessage(input, form, errorClass, inputErrorClass);

    }
}


function enableValidation({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}){
    const forms = [...document.querySelectorAll(formSelector)];
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
        });
        const inputs = [...form.querySelectorAll(inputSelector)];
        const button = form.querySelector(submitButtonSelector);

        inputs.forEach(input => {
            input.addEventListener('input', () => {
              checkInputValidity(input, form, errorClass, inputErrorClass);
              toggleButtonState(inputs, button, inactiveButtonClass);
            })
          })
    })
}

// enabling validation by calling enableValidation()
// pass all the settings on call

enableValidation({
    formSelector: ".modal__form",
    inputSelector: ".modal__input",
    submitButtonSelector: ".modal__save",
    inactiveButtonClass: "modal__save_disabled",
    inputErrorClass: "modal__input_type_error",
    errorClass: "modal__error_visible"
  });

