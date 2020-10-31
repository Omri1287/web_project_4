class Section {
    constructor({items, renderer}, cardSelector){
        this._items = items;
        console.log(this._items);

        this._renderer = renderer;
        this._cardList = document.querySelector(cardSelector);
    }
    renderItems(){
        this._items.forEach(item => {
            this._renderer(item);
        })
    }
    addItem(item){
        this._cardList.prepend(item); 
    }

}
export default Section;
