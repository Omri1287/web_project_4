export default class Api {
    constructor({baseUrl, headers}) {
      this._baseUrl = baseUrl;
      this._headers = headers;
    }
  
    getCardList() {
        /*try {
            const response = await fetch(this._baseUrl + '/cards', {headers: this._headers});
            if(response.ok){
               const data = await response.json();
               return data;
            }
            
        } catch (error) {
            throw new Error(error);
        }*/

        return fetch(this._baseUrl + '/cards', {
                headers: this._headers
                })
                //if you get response send the json, if not send an error status
                //.then((res) => res.ok ? res.json: Promise.reject('Error!' + res.statusText))
                .then(function(res) {
                    if(res.ok){
                        return res.json()
                    } 
                    else{
                        Promise.reject('Error!' + res.statusText)
                    }
                })
                .catch(err => console.log(err))
    }
    getUserInfo(){
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            //method: "GET"
            })
            //if you get response send the json, if not send an error status
            .then((res) => res.ok ? res.json(): Promise.reject('Error!' + res.statusText))
            .catch(err => console.log(err))
    }
    //should do the promise and wait for the get card list and user info results. 
    //then render all of them together, not step by step
    getAppInfo() {
        return Promise.all([this.getUserInfo(), this.getCardList()])
      }
    
    addCard({name, link}){
        return fetch(this._baseUrl + '/cards', {
            headers: this._headers,
            //i wish to send data to the server side
            method: "POST",
            //which data i want to send to the server side 
            body: JSON.stringify({
                name,
                link
            })
        })
        .then((res) => res.ok ? res.json() : Promise.reject('Error!' + res.statusText))
        .catch(err => console.log(err))
    }
    removeCard(cardId){
        return fetch(this._baseUrl + '/cards' + cardId, {
            headers: this._headers,
            //i wish to delete data 
            method: "DELETE",
        })
        .then((res) => res.ok ? res.json(): Promise.reject('Error!' + res.statusText))
        .catch(err => console.log(err))
    }
    //changeCardLikeStatus(cardId, like){}
    addLike(cardId){
        return fetch(this._baseUrl + '/cards/likes' + cardId, {
            headers: this._headers,
            //i wish to delete data 
            method: "PUT",
        })
        .then((res) => res.ok ? res.json(): Promise.reject('Error!' + res.statusText))
        .catch(err => console.log(err))

    }
    deleteLike(cardId){
        return fetch(this._baseUrl + '/cards/likes' + cardId, {
            headers: this._headers,
            //i wish to delete data 
            method: "DELETE",
        })
        .then((res) => res.ok ? res.json(): Promise.reject('Error!' + res.statusText))
        .catch(err => console.log(err))
    }
    setUserInfo ({name, about}){
        return fetch(this._baseUrl + '/users/me', {
            headers: this._headers,
            method: "PATCH",
            body: JSON.stringify({
                name,
                about

            })
            
        })
            //if you get response send the json, if not send an error status
            .then((res) => res.ok ? res.json(): Promise.reject('Error!' + res.statusText))
            .catch(err => console.log(err))
    }
    setUserAvatar({avatar}){

    }
  
    // other methods for working with the API
  }
  