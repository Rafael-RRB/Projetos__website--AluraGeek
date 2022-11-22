const sessionStorageProduct = JSON.parse(sessionStorage.getItem("productOrderCurrent"));
const sessionStorageCategory = JSON.parse(sessionStorage.getItem("productOrderCategoryList"));

const mainProductImg = $(".principal__produto>img");
const mainProductTitle = $(".produto__texto>h1");
const mainProductPrice = $(".produto__texto>h2");
const mainProductDescription = $(".produto__texto>p");

// Gera o produto principal
function generateProduct() {
  return `
  <section class="principal__produto">
    <img ${sessionStorageProduct._img.replace(/img/g, "../img")} class="produto__imagem">
    
    <section class="produto__texto">
      <h1 class="produto__titulo">${sessionStorageProduct._name}</h1>
      <h2 class="produto__preco">R$${sessionStorageProduct._price}</h2>
      <p class="produto__descricao">${sessionStorageProduct._description}</p>
    </section>
  </section>
  `
}
// Gera as cartas
function generateCards() {
  var htmlProductCards = [];
  for(let i = 0; i < sessionStorageCategory.length; i++) {
    htmlProductCards.push(`
    <a href="#" class="container__cartao">
      <img ${sessionStorageCategory[i]._img.replace(/img/g, "../img")} class="cartao__imagem">

      <div class="cartao__descricao">
        <h2 class="cartao__titulo">${sessionStorageCategory[i]._name}</h2>
        <p class="cartao__preco">R$${sessionStorageCategory[i]._price}</p>
        <p class="cartao__link">Ver produto</p>
      </div>
    </a>
    `);
  }
  return '<section class="principal__similares"><h2 class="similares__titulo">Produtos similares</h2><section class="similares__cartoes">' + htmlProductCards.join(" ") + '</section></section>';
}
// Insere o HTML
$("main").innerHTML = generateProduct() + generateCards();

// Link para a página com descrição
const currentProductCat = sessionStorageProduct._category;
const currentProductList = (() => {
  let productList = JSON.parse(sessionStorage.getItem("productOrderList"));
  for(let i = 0; i < 3; i++) {
    if(productList[i][0]._category === currentProductCat) {
      return productList[i];
    }
  }
})();

let indexCards = $$(".container__cartao");
let indexProductList = JSON.parse(sessionStorage.getItem("productOrderList"));

console.log(JSON.parse(sessionStorage.getItem("productOrderCurrent")));
console.log(JSON.parse(sessionStorage.getItem("productOrderCategoryList")));


for(let cCard = 0; cCard < 5; cCard++) {
  indexCards[cCard].addEventListener("click", event => {
    var currentProductStringify = JSON.stringify(sessionStorageCategory[cCard]);
    sessionStorage.setItem("productOrderCurrent", currentProductStringify);
    for(let i = 0; i < currentProductList.length; i++) {
      if(currentProductStringify === JSON.stringify(currentProductList[i])) {
        let indexProductListSlice = JSON.parse(JSON.stringify(currentProductList));
        indexProductListSlice.splice(i, 1);
        sessionStorage.setItem("productOrderCategoryList", JSON.stringify(indexProductListSlice));
      }
    }
    history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    location.reload();
  });
}

