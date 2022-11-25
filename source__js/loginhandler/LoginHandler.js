class loginHandler {
  constructor(email, pwd) {
    this._email = email;
    this._pwd = pwd;

    if(regexEmail.test(this._email) && regexPassword.test(this._pwd)) {
      loginListArray.addLogin(new login(this._email, this._pwd));
    } else {
      throw Error("login credentials failed.");
    }
  }
}

/* 
  Simples método para criptografar o localstorage (no caso de alguém inserir um e-mail ou senha reais)
  A ideia é que, para tirar a "criptografia", seria necessário abrir o site e ver o src (que receberá minify)
*/
// Transforma uma string utilizando o base16
function simpleEncryption(string) {
  let result = "";
  for(let i = 0; i < string.length; i++) {
      result += string.charCodeAt(i).toString(16);
  }
  return result;
}
// Tira a criptografia base16 de uma string 
function simpleDecryption(string) {
  let result = "";
  for(let i = 0; i < string.length; i += 2) {
      let stringPair = string.charAt(i) + string.charAt(i+1);
      result += String.fromCharCode(parseInt(stringPair, 16));
}
  return result;
}