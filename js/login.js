if("true"==sessionStorage.getItem("login"))alert("Você já efetuou login! redirecionando..."),window.location.replace("../index.html");else{var loginListArray=new loginList;if(null!==localStorage.getItem("key1")){var lsArray=JSON.parse(localStorage.getItem("key1"));for(let o=1;o<lsArray.length;o++)loginListArray._loginList[o]=new login(lsArray[o]._email,lsArray[o]._pwd),loginListArray._loginList[o]._email=simpleDecryption(loginListArray._loginList[o]._email),loginListArray._loginList[o]._pwd=simpleDecryption(loginListArray._loginList[o]._pwd)}loginListArray.updateLogin()}const formLogin=$(".login__formulario:nth-of-type(1)"),inputLoginLabelEmail=$(".login__formulario:nth-child(1)>.formulario__container:nth-of-type(1)"),inputLoginEmail=$(".login__formulario:nth-child(1)>.formulario__container:nth-of-type(1)>.formulario__campo"),inputLoginLabelPWD=$(".login__formulario:nth-child(1)>.formulario__container:nth-of-type(2)"),inputLoginPWD=$(".login__formulario:nth-child(1)>.formulario__container:nth-of-type(2)>.formulario__campo"),buttonLogin=$(".login__formulario:nth-child(1)>.formulario__botao"),formNewAcc=$(".login__formulario:nth-of-type(2)"),inputNewAccLabelEmail=$(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(1)"),inputNewAccEmail=$(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(1)>.formulario__campo"),inputNewAccLabelPWD=$(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(2)"),inputNewAccPWD=$(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(2)>.formulario__campo"),inputNewAccLabelPWDConfirm=$(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(3)"),inputNewAccPWDConfirm=$(".login__formulario:nth-child(2)>.formulario__container:nth-of-type(3)>.formulario__campo"),buttonNewAcc=$(".login__formulario:nth-child(2)>.formulario__botao"),formLoginDefaultMsg=["Digite seu e-mail","Digite sua senha","Confirme sua senha"],msgErrorEmail=["E-mail inválido"],msgErrorPWD=["Senha: Mínimo 8 dígitos","Senha: Máximo 20 dígitos","Senha: Mínimo de 1 letra minúscula (a-z)","Senha: Mínimo de 1 letra maíuscula (A-Z)","Senha: Mínimo de 1 dígito (0-9)","Senha: Mínimo de 1 símbolo (!@#$%&*-_=+-)"],msgErrorPWDConfirm=["Senhas não estão iguais"],msgLoginSuccess=["E-mail válido","Senha válida","Senha confirmada"],regexEmail=/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&\*\-_=+-])[A-Za-z\d!@#$%&\*\-_=+-]{8,20}$/,condLoginEmail=[regexEmail],condLoginPWD=[/^.{8,}$/,/^.{0,20}$/,/[a-z]+/,/[A-Z]+/,/\d+/,/[!@#$%&\*\-_=+-]+/];var condLoginPWDConfirm=[inputNewAccPWD.value===inputNewAccPWDConfirm.value];buttonLogin.addEventListener("click",o=>{o.preventDefault();let i=inputLoginEmail.value,n=inputLoginPWD.value;loginListArray._arrayEmail.includes(i)&&loginListArray._arrayPWD.includes(n)?(sessionStorage.setItem("login",JSON.stringify({login:!0,email:n})),alert("Credenciais corretas! redirecionando..."),window.location.replace("../index.html")):alert("Email e/ou senha estão incorretos")}),buttonNewAcc.addEventListener("click",o=>{o.preventDefault(),condLoginPWDConfirm=[inputNewAccPWD.value===inputNewAccPWDConfirm.value];let i=inputNewAccEmail.value,n=inputNewAccPWD.value;inputNewAccPWDConfirm.value;regexEmail.test(i)&&regexPassword.test(n)&&condLoginPWDConfirm[0]&&(new loginHandler(i,n),alert("Conta criada com sucesso! Por favor,faça o login agora."),clearForm(formNewAcc,formLoginDefaultMsg))}),addEventListenerForm(inputNewAccLabelEmail,inputNewAccEmail,"focusout",condLoginEmail,formLoginDefaultMsg[0],msgErrorEmail,msgLoginSuccess[0]),addEventListenerForm(inputNewAccLabelPWD,inputNewAccPWD,"focusout",condLoginPWD,formLoginDefaultMsg[1],msgErrorPWD,msgLoginSuccess[1]),inputNewAccPWDConfirm.addEventListener("focusout",o=>{var i=(condLoginPWDConfirm=[inputNewAccPWD.value===inputNewAccPWDConfirm.value]).length;if(""==inputNewAccPWDConfirm.value)labelResult(inputNewAccLabelPWDConfirm.querySelector("p"),formLoginDefaultMsg[2],""),classResult(inputNewAccLabelPWDConfirm,void 0);else{for(let o=0;o<condLoginPWDConfirm.length;o++)condLoginPWDConfirm[o]||(labelResult(inputNewAccLabelPWDConfirm.querySelector("p"),msgErrorPWDConfirm,"[X]"),i--);i<condLoginPWDConfirm.length||!regexPassword.test(inputNewAccPWDConfirm.value)?classResult(inputNewAccLabelPWDConfirm,!1):(labelResult(inputNewAccLabelPWDConfirm.querySelector("p"),msgLoginSuccess[2],"[✓]"),classResult(inputNewAccLabelPWDConfirm,!0))}});