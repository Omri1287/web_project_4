export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = popupSelector;
        this._handleEscClose = this._handleEscClose.bind(this);

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
        if(e.key === "Escape"){
            this.close()
        }
    }
    setEventListeners() {
        this._popupSelector.addEventListener('click', (e) => {
            if(e.target.classList.contains('modal') || e.target.classList.contains('modal__close-btn') || e.target.classList.contains('modal_is-open')){
                this.close();
            }
        })
    }
}