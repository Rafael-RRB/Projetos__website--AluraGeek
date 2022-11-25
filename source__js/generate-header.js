
/* 
O site possuirá múltiplas páginas, e sem utilizar uma linguagem server-side como PHP, haverá muito trabalho
manual que poderia ser executado com um simples "include".

Assim, utilizarei o JavaScript para gerar os cabeçalhos e rodapés -- o que não é recomendável -- mas espero
que quaisquer pessoas que analisarem meu trabalho entendam.
*/

$('.cabecalho').innerHTML = `
<a href="${concatHref[0]+"index.html"}" class="cabecalho__logomarca">
  <span class="hide-text">link para home</span>
</a>

<label class="cabecalho__pesquisa-container">
  <input type="text" class="pesquisa-container__input" placeholder="O que deseja encontrar?">
</label>

${(() => {
  if(!(JSON.parse(sessionStorage.getItem("login")) === null)) {
    if(JSON.parse(sessionStorage.getItem("login")).login === true) {
      return `<a href="${concatHref[1]+"novo_produto.html"}" class="cabecalho__login">novo produto</a>`
    } else {
      return `<a href="${concatHref[1]+"login.html"}" class="cabecalho__login">login</a>`
    }
  } else {
    return `<a href="${concatHref[1]+"login.html"}" class="cabecalho__login">login</a>`
  }
    
})()}

<button class="cabecalho__pesquisa--mobile">
  <span class="hide-text">pesquisar</span>
</button>

<div class="mobile__pesquisa">
  <label class="pesquisa__label">
      <input type="text" class="label__campo" placeholder="O que deseja encontrar?">
  </label>

  <button class="pesquisa__botao generic__button">></button>
</div>
`;

// Barra de pesquisa mobile
const mobileSearchButton = $("header>button");
const mobileSearchInput = $(".label__campo");
const desktopSearchInput = $(".pesquisa-container__input");
const searchfield = $(".mobile__pesquisa");
const searchButton = $(".pesquisa__botao");
mobileSearchButton.addEventListener("click", event => {
  // Animação
  if(searchfield.classList.contains("js__display--flex")) {
    searchfield.classList.add("js__animation--searchfield");
    searchButton.classList.add("js__animation--searchfield");
    setTimeout(() => {
      searchfield.classList.remove("js__display--flex");
      searchfield.classList.remove("js__animation--searchfield");
      searchButton.classList.remove("js__animation--searchfield");
    }, 100);
  } else {
    searchfield.classList.add("js__animation--searchfield");
    searchButton.classList.add("js__animation--searchfield");
    searchfield.classList.add("js__display--flex");
    setTimeout(() => {
      searchfield.classList.remove("js__animation--searchfield");
      searchButton.classList.remove("js__animation--searchfield");
    }, 100);
  }
  
});

function searchInput(input) {
  let searchProduto = (() => {
    let tempArr = [];
    for(let i = 0; i < productListArray._productList.length; i++) {
      tempArr.push(translateString(productListArray._productList[i]._name));
    }
    return tempArr;
  })();
  // Pesquisa
  switch(true) {
    case(input.value === ""):
      alert("Você não inseriu nada...");
      break;
    case(searchHome.includes(translateString(input.value))):
      window.location.href = "../index.html";
      break;
    case(searchLogin.includes(translateString(input.value))):
      window.location.href = "../html/login.html";  
      break;
    case(searchNovoProduto.includes(translateString(input.value))):
      window.location.href = "../html/novo_produto.html";  
      break;
    case(searchListaProduto.includes(translateString(input.value))):
      window.location.href = "../html/lista_produtos.html";  
      break;
    case(searchProduto.includes(translateString(input.value))):
      //window.location.href = "../html/produto.html";  
      break;
    default:
      alert("Nenhum resultado foi encontrado. Por favor, tente novamente.");
  }
}

searchButton.addEventListener("click", event => {
  searchInput(mobileSearchInput);
});

mobileSearchInput.addEventListener("keyup", event => {
  if(event.key === "Enter") {
    searchInput(mobileSearchInput);
  }
});

desktopSearchInput.addEventListener("keyup", event => {
  if(event.key === "Enter") {
    searchInput(desktopSearchInput);
  }
});

function translateString(string) {
  string = string.toLocaleLowerCase();
  string = string.replace(/а|ạ|ą|ä|à|á|â|ą/g, "a");
  string = string.replace(/е|ẹ|ė|é|è|ê/g, "e");
  string = string.replace(/і|í|ï|î/g, "i");
  string = string.replace(/о|ο|օ|ȯ|ọ|ỏ|ơ|ó|ò|ö|ô/g, "o");
  string = string.replace(/υ|ս|ü|ú|ù|û/g, "u");
  string = string.replace(/ç/g, "c");
  string = string.replace(/\s/g, "");
  return string;
}

const searchHome = ["home","index","homepage", "inicio", "paginainicial", "inicial", "comeco"];
const searchLogin = ["login", "enter", "entrar", "conta", "minhaconta", "carregar", "admin"];
const searchNovoProduto = ["novo", "new", "criar", "novoproduto", "criarproduto", "criarnovoproduto"];
const searchListaProduto = ["lista", "listagem", "produtos", "verprodutos", "verproduto"];