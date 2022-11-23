console.log('generate-footer.js loaded succesfully.');

/* 
O site possuirá múltiplas páginas, e sem utilizar uma linguagem server-side como PHP, haverá muito trabalho
manual que poderia ser executado com um simples "include".

Assim, utilizarei o JavaScript para gerar os cabeçalhos e rodapés -- o que não é recomendável -- mas espero
que quaisquer pessoas que analisarem meu trabalho entendam.
*/

$('.rodape').innerHTML = `
  <section class="rodape__secao">
    <nav class="secao__navegacao">
      <a href="${concatHref[0]+"index.html"}" class="secao__logomarca">
        <span class="hide-text">link para home</span>
      </a>
      <ul class="secao__lista">
        <li class="lista__item">
          <a href="${concatHref[1]+"sobre.html"}" class="secao__link">Quem somos nós</a></li>
        <li class="lista__item">
          <a href="${concatHref[1]+"privacidade.html"}" class="secao__link">Política de privacidade</a></li>
        <li class="lista__item">
          <a href="${concatHref[1]+"fidelidade.html"}" class="secao__link">Programa fidelidade</a></li>
        <li class="lista__item">
          <a href="${concatHref[1]+"lojas.html"}" class="secao__link">Nossas lojas</a></li>
        <li class="lista__item">
          <a href="${concatHref[1]+"franquia.html"}" class="secao__link">Quero ser franqueado</a></li>
        <li class="lista__item">
          <a href="${concatHref[1]+"anuncios.html"}" class="secao__link">Anuncie aqui</a></li>
      </ul>
    </nav>
    
    <form action="" class="rodape__formulario">
      <h2 class="formulario__titulo">Fale conosco</h2>
      
      <label class="formulario__container">
        <p class="formulario__label">Nome</p>
        <input type="text" class="formulario__campo" required>
      </label>
      
      ${(() => {
        if(sessionStorage.getItem("login") === null) {
          return `
          <label class="formulario__container">
            <p class="formulario__label">E-mail</p>
            <input type="text" class="formulario__campo" required>
          </label>
          `;
        } else {
          return ``;
        }
      })()}

      <label class="formulario__container">
        <p class="formulario__label">Mensagem</p>
        <textarea name="mensagem" placeholder="Digite aqui" minlength="20" maxlength="400" class="formulario__mensagem" required></textarea>
      </label>

      <button class="formulario__botao generic__button">Enviar mensagem</button>
    </form>

    <section class="rodape__copyright">
      <p class="copyright__texto">Desenvolvido por Rafael R.B. com apoio da Alura.</p>
    </section>
  </section>
`;

const formFooterDefaultMsg = ["Nome", "E-mail", "Mensagem"];
const msgErrorFooterName = ["Nome é muito curto", "Nome é muito longo"];
const msgErrorFooterEmail = ["E-mail inválido"];
const msgErrorFooterMessage = ["Mensagem muito curta", "Mensagem muito longa"];
const msgFooterSuccess = ["Nome válido", "E-mail válido", "Mensagem válida"];

const regexFooterEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

let labelFooterList = $$(".rodape__formulario>.formulario__container");
const footerForm = $(".rodape__formulario");
const labelFooterName = labelFooterList[0];
var labelFooterInputName = labelFooterName.querySelector("input").value;
const labelFooterMSG = labelFooterList[(labelFooterList.length-1)];
var labelFooterInputMSG = labelFooterMSG.querySelector("textarea").value;
const buttonFooterForm = $(".rodape__formulario>button");

const condFooterName = [/^[a-zA-Zà-úÀ-Ú \.-]{3,}$/,/^[a-zA-Zà-úÀ-Ú \.-]{0,30}$/];
const condFooterEmail = [regexFooterEmail];
const condFooterMessage = [/^.{20,}$/, /^.{0,400}$/];

function testRegex(target, conditions) {
  var result = 0;
  for(let i = 0; i < conditions.length; i++) {
    if(!conditions[i].test(target)) {
      result--;
    }
  }
  if(result === 0) {
    return true;
  } else {
    return false;
  }

}


addEventListenerForm(labelFooterName, labelFooterName.querySelector("input"), "focusout", condFooterName, formFooterDefaultMsg[0], msgErrorFooterName, msgFooterSuccess[0]);
if(sessionStorage.getItem("login") === null) {
  let labelFooterEmail = labelFooterList[(labelFooterList.length-2)];
  addEventListenerForm(labelFooterEmail, labelFooterEmail.querySelector("input"), "focusout", condFooterEmail, formFooterDefaultMsg[1], msgErrorFooterEmail, msgFooterSuccess[1]);
}
addEventListenerForm(labelFooterMSG, labelFooterMSG.querySelector("textarea"), "focusout", condFooterMessage, formFooterDefaultMsg[2], msgErrorFooterMessage, msgFooterSuccess[2]);
buttonFooterForm.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("footer click");
  labelFooterInputName = labelFooterName.querySelector("input").value;
  labelFooterInputMSG = labelFooterMSG.querySelector("textarea").value;
  console.log(testRegex(labelFooterInputName, condFooterName));
  console.log(labelFooterInputMSG);
  if(testRegex(labelFooterInputName, condFooterName) && testRegex(labelFooterInputMSG, condFooterMessage)) {
    if(sessionStorage.getItem("login") === null) {
      var labelFooterEmail = labelFooterList[(labelFooterList.length-2)];
      var labelFooterInputEmail = labelFooterEmail.querySelector("input").value;
      if(testRegex(labelFooterInputEmail, condFooterEmail)) {
        alert("Mensagem enviada com sucesso!");
        clearForm(footerForm, formFooterDefaultMsg);
      }
    } else {
      alert("Mensagem enviada com sucesso!");
      clearForm(footerForm, formFooterDefaultMsg);
    }
  }
});