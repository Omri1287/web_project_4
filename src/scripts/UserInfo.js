export default class UserInfo {
    constructor(name, desc){
        this._name = name;
        this._desc = desc;
    }
    getUserInfo(){
        this._userInfo = {name: this._name.textContent, desc:this._desc.textContent};
        return this._userInfo;
    }
    setUserInfo({name, desc}){
        this._name = name; 
        this._desc = desc; 
    }
}