class loginList {
  constructor() {
    this._loginList = [new login("admin", "admin")];
    this._arrayEmail = ["admin"];
    this._arrayPWD = ["admin"];
  }

  updateLogin() {
    this._arrayEmail = [];
    this._arrayPWD = [];
    for(let i = 0; i < this._loginList.length; i++) {
      this._arrayEmail.push(this._loginList[i]._email);
      this._arrayPWD.push(this._loginList[i]._pwd);
    }
  }

  addLogin(login) {
    this._loginList.push(login);
    localStorage.setItem("key1", JSON.stringify(this.localStorageEncryption()));
    // localStorageEncryption();
    this.updateLogin();
  }

  localStorageEncryption() {
    let encryptedArray = JSON.parse(JSON.stringify([].concat(this._loginList)));
    for(let i = 0; i < this._loginList.length; i++) {
      encryptedArray[i]._email = simpleEncryption(encryptedArray[i]._email);
      encryptedArray[i]._pwd = simpleEncryption(encryptedArray[i]._pwd);
    }
    return encryptedArray;
  }
}