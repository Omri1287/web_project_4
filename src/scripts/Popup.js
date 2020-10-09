class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }
    open(){
        this._popupSelector.classList.add('modal_is-open');
        document.addEventListener('keyup', this._handleEscClose )
    }
    close(){
        this._popupSelector.classList.remove('modal_is-open');
        document.removeEventListener('keyup', this._handleEscClose )

    }
    _handleEscClose(e){
        if(e.which == 27){
            this.close()
        }
    }
    setEventListeners() {
        this._popupSelector.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal__close-btn') || e.target.closest('modal')){
                e.close();
            };
        })
    }
}

export default Popup;

