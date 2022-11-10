if(sessionStorage.getItem("login") == "true") {
  alert("Você já efetuou login! redirecionando...");
  window.location.replace("../index.html");
} else {
  var loginListArray = new loginList();
  if(!(localStorage.getItem("key1") === null)) {
    var lsArray = JSON.parse(localStorage.getItem("key1"));
    // i = 1 devido a conta de administrador, de email "admin" e senha "admin"
    for(let i = 1; i < lsArray.length; i++) {
      loginListArray._loginList[i] = new login(lsArray[i]._email, lsArray[i]._pwd);
      loginListArray._loginList[i]._email = simpleDecryption(loginListArray._loginList[i]._email);
      loginListArray._loginList[i]._pwd = simpleDecryption(loginListArray._loginList[i]._pwd);
    }
  }
  loginListArray.updateLogin();
}

const formLogin = $(".login__formulario:nth-of-type(1)");
const inputLoginLabelEmail = $(".login__formulario:nth-child(1)>.formulario__container:nth-of-type(1)");
const inputLoginEmail = $(".login__formulario:nth-child(1)>.formulario__container:nth-of-type(1)>.formulario__campo");
const inputLoginLabelPWD = $(".login__formulario:nth-child(1)>.formulario__container:nth-of-type(2)");
const inputLoginPWD = $(".login__formulario:nth-child(1)>.formulario__container:nth-of-type(2)>.formulario__campo");
const buttonLogin = $(".login__formulario:nth-child(1)>.formulario__botao");

const formNewAcc = $(".login__formulario:nth-of-type(2)");
const inputNewAccLabelEmail = $(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(1)");
const inputNewAccEmail = $(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(1)>.formulario__campo");
const inputNewAccLabelPWD = $(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(2)");
const inputNewAccPWD = $(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(2)>.formulario__campo");
const inputNewAccLabelPWDConfirm = $(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(3)");
const inputNewAccPWDConfirm = $(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(3)>.formulario__campo");

const buttonNewAcc = $(".login__formulario:nth-child(2)>.formulario__botao");

// Mensagens padrão e de erro para labels
const formLoginDefaultMsg = ["Digite seu e-mail", "Digite sua senha", "Confirme sua senha"];
const msgErrorEmail = ["E-mail inválido"];
const msgErrorPWD = [
  "Senha: Mínimo 8 dígitos",
  "Senha: Máximo 20 dígitos",
  "Senha: Mínimo de 1 letra minúscula (a-z)",
  "Senha: Mínimo de 1 letra maíuscula (A-Z)",
  "Senha: Mínimo de 1 dígito (0-9)",
  "Senha: Mínimo de 1 símbolo (!@#$%&*-_=+-)",
];
const msgErrorPWDConfirm = ["Senhas não estão iguais"];
const msgLoginSuccess = ["E-mail válido", "Senha válida", "Senha confirmada"];
// Condições
  // Email: regex mais aprofundado que achei
  const regexEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  // Senha: 8 a 20 caracteres, pelo menos uma letra minúscula, letra maiúscula, dígito e símbolo
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&\*\-_=+-])[A-Za-z\d!@#$%&\*\-_=+-]{8,20}$/;
  // Para função
  const condLoginEmail = [regexEmail];
  const condLoginPWD = [
    /^.{8,}$/,
    /^.{0,20}$/,
    /[a-z]+/,
    /[A-Z]+/,
    /\d+/,
    /[!@#$%&\*\-_=+-]+/
  ];
  var condLoginPWDConfirm = [inputNewAccPWD.value === inputNewAccPWDConfirm.value];
  
buttonLogin.addEventListener("click", event => {
  event.preventDefault();
  console.log("click: entrar");
  let inputEmail = inputLoginEmail.value;
  let inputPWD = inputLoginPWD.value;
  if(loginListArray._arrayEmail.includes(inputEmail) && loginListArray._arrayPWD.includes(inputPWD)) {
    sessionStorage.setItem("login", JSON.stringify({login: true, email: inputPWD}));
    alert("Credenciais corretas! redirecionando...");
    window.location.replace("../index.html");
  } else {
    alert("Email e/ou senha estão incorretos");
  }
});
//
buttonNewAcc.addEventListener("click", event => {
  event.preventDefault();
  condLoginPWDConfirm = [inputNewAccPWD.value === inputNewAccPWDConfirm.value];
  console.log("click: criar");
  let inputEmail = inputNewAccEmail.value;
  let inputPWD = inputNewAccPWD.value;
  let inputPWDConfirm = inputNewAccPWDConfirm.value;
  if(regexEmail.test(inputEmail) && regexPassword.test(inputPWD) && condLoginPWDConfirm[0]) {
    new loginHandler(inputEmail, inputPWD);
    alert("Conta criada com sucesso! Por favor, faça o login agora.");
    clearForm(formNewAcc, formLoginDefaultMsg);
  }
});
// Cria os event listeners do formulário de criação de conta
addEventListenerForm(inputNewAccLabelEmail, inputNewAccEmail, "focusout", condLoginEmail, formLoginDefaultMsg[0], msgErrorEmail, msgLoginSuccess[0]);
addEventListenerForm(inputNewAccLabelPWD, inputNewAccPWD, "focusout", condLoginPWD, formLoginDefaultMsg[1], msgErrorPWD, msgLoginSuccess[1]);

inputNewAccPWDConfirm.addEventListener("focusout", event => {
  condLoginPWDConfirm = [inputNewAccPWD.value === inputNewAccPWDConfirm.value];
  var conditionCheck = condLoginPWDConfirm.length;
  if(inputNewAccPWDConfirm.value == "") {
    labelResult(inputNewAccLabelPWDConfirm.querySelector("p"), formLoginDefaultMsg[2], "");
    classResult(inputNewAccLabelPWDConfirm, undefined);
  } else {
    for(let i = 0; i < condLoginPWDConfirm.length; i++) {
      if(!condLoginPWDConfirm[i]) {
        console.log("LOGIN FAIL");
        labelResult(inputNewAccLabelPWDConfirm.querySelector("p"), msgErrorPWDConfirm, "[X]");
        conditionCheck--;
      }
    }
    console.log(conditionCheck);
    console.log(condLoginPWDConfirm.length);
    console.log(conditionCheck < condLoginPWDConfirm.length);
    if(conditionCheck < condLoginPWDConfirm.length || !(regexPassword.test(inputNewAccPWDConfirm.value))) {
      classResult(inputNewAccLabelPWDConfirm, false);
    } else {
      labelResult(inputNewAccLabelPWDConfirm.querySelector("p"), msgLoginSuccess[2], "[✓]");
      classResult(inputNewAccLabelPWDConfirm, true);
    }
  }
});