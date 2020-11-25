 import { profileName, profileDesc, avatarImage } from '../pages/index.js';

export default class UserInfo {
    constructor(title, desc, avatar){
        this._title = title;
        this._desc = desc;
        this._avatar = avatar;
    }
    getUserInfo(){
        return this._userInfo = {title: this._title.textContent, desc:this._desc.textContent};
    }
    setUserInfo(title, desc, userAvatar){
        this._userInfo = { title, desc, userAvatar };
        if(userAvatar){
            avatarImage.src = this._userInfo.userAvatar;
            profileName.textContent = this._userInfo.title;
            profileDesc.textContent = this._userInfo.desc;
        }else{
            profileName.textContent = this._userInfo.title;
            profileDesc.textContent = this._userInfo.desc;
        }
    }
}