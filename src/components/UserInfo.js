 import { profileName, profileDesc } from '../pages/index.js';

export default class UserInfo {
    constructor(title, desc){
        this._title = title;
        this._desc = desc;
    }
    getUserInfo(){
        return this._userInfo = {title: this._title.textContent, desc:this._desc.textContent};
    }
    setUserInfo(title, desc){
        this._userInfo = { title, desc };
        profileName.textContent = this._userInfo.title;
        profileDesc.textContent = this._userInfo.desc;
    }
}