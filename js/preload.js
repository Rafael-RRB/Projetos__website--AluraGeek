console.log('preload.js loaded succesfully.');

if(!(sessionStorage.getItem("editProduct") === null) && !(/\/novo_produto\.html$/).test(window.location.href)) {
  sessionStorage.removeItem("editProduct");
}

/* Declarações */
// HREF da página atual
const hrefDocument = window.location.href;
// Shorthand de querySelector e querySelectorAll
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const regexHREF = new RegExp([
  "\/index\.html$",
  "\/lista_produtos\.html$",
  "\/novo_produto\.html$"].join("|"), "i");
const regexHREFLogin = /\/login\.html$/;
// Variável para alterar o SRC dos Anchors do cabeçalho e rodapé
if(!/\b\/index\.html\b/.test(hrefDocument)) {
  var concatHref = ["../", ""];
} else {
  var concatHref = ["", "html/"];
}

/* Funções */
// Limpa o local storage e o session storage, para funções de debug
function clearLocalStorage() {
  localStorage.clear();
  sessionStorage.clear();
}
// Adiciona a classes "falha" e "sucesso" em formulários
function classResult(target, result) {
  if(result === false) {
    target.classList.add("js__failure");
    target.classList.remove("js__success");
  } else if (result === true) {
    target.classList.add("js__success");
    target.classList.remove("js__failure");
  } else {
    target.classList.remove("js__failure");
    target.classList.remove("js__success");
  }
}
// Modifica o <p> dentro de uma label, para orientar porque o usuário errou
function labelResult(target, msg, suffix) {
  target.innerText = `${msg} ${suffix}`;
}
/*
  Pega um elemento "target" e adiciona um event listener do tipo "type";
  Uma array de condições "condArray" recebe um push com "true";
*/
function addEventListenerForm(label, input, type, condArray, msgDefault, msgArray, msgSuccess) {
  input.addEventListener(type, event => {
  var conditionCheck = condArray.length;
  if(input.value == "") {
    labelResult(label.querySelector("p"), msgDefault, "");
    classResult(label, undefined);
  } else {
    for(let i = 0; i < condArray.length; i++) {
      if(!condArray[i].test(input.value)) {
        labelResult(label.querySelector("p"), msgArray[i], "[X]");
        conditionCheck--;
      }
    }
    if(conditionCheck < condArray.length) {
      classResult(label, false);
    } else {
      labelResult(label.querySelector("p"), msgSuccess, "[✓]");
      classResult(label, true);
    }
  }
  });
}

// Limpa todos os labels e inputs do formulário fornecido.
function clearForm(form, msgArray) {
  let formLabels = form.querySelectorAll("label");
  let formInputs = form.querySelectorAll("input, textarea");
  formLabels.forEach((v, i, a) => {
    a[i].querySelector("p").innerText = msgArray[i];
    a[i].classList.remove("js__failure");
    a[i].classList.remove("js__success");
  });
  formInputs.forEach((v, i, a) => {
    a[i].value = "";
  });
}

/*
  Quebrei a cabeça nisso aqui, mas no final deu tudo certo.
  Primeira vez que utilizei o localstorage, JSON stringify e parse.
  O stringify (aparentemente, para mim) armazena apenas os objetos.
*/
if(regexHREF.test(window.location.href)) {
  var productListArray = new productList();
  if(!(localStorage.getItem("productListArray") === null)) {
    var lsArray = JSON.parse(localStorage.getItem("productListArray"));
    for(let i = 0; i < lsArray.length; i++) {
      productListArray._productList[i] = new product(lsArray[i]._img, lsArray[i]._category, lsArray[i]._name, lsArray[i]._price, lsArray[i]._description);
    }
  } else {
    function pImgSRC(num) {
      return ` 
       srcset="img/products/product__${num}--size1.png 126w,
      img/products/product__${num}--size2.png 174w,
      img/products/product__${num}--size3.png 261w,
      img/products/product__${num}--size4.png 348w"
       sizes="(max-width: 280px) 126px,
      (max-width: 428px) 193px,
      (max-width: 768px) 216px,
      (max-width: 1024px) 296px,
      (max-width: 1280px) 152px,
      100vw"
       src="img/products/product__${num}--size4.png" alt="" `;
    }
    function pName(num) {
      return `Produto #${num}`;
    }
    function pDesc() {
      return `Lorem ipsum dolor sit amet. Vel voluptates quaerat et esse amet sed quisquam similique ut obcaecati.`;
    }
    function pGenerate(pCategory, start) {
      for(let i = 0; i < 6; i++) {
        productListArray._productList.push(new product(pImgSRC(start), pCategory, pName(start), (42).toLocaleString("pt-br", {minimumFractionDigits: 2, maximumFractionDigits: 2}), pDesc()));
        start++;
      }
    }
    pGenerate("Star Wars", 1);
    pGenerate("Consoles", 7);
    pGenerate("Diversos", 13);
  }
}