export default class UserInfo {
    constructor(inputName, inputDesc){
        this._name = inputName;
        this._job = inputDesc;
    }
    getUserInfo(){
        this._userInfo = {name: this._name.textContent, job:this._job.textContent};
        return this._userInfo;
    }
    setUserInfo({name, job}){
        this._name.textContent = name; 
        this._job.textContent = job; 
    }
}