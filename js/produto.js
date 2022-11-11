const sessionStorageProduct = JSON.parse(sessionStorage.getItem("productOrderCurrent"));
const sessionStorageCategory = JSON.parse(sessionStorage.getItem("productOrderCategoryList"));
console.log(sessionStorageCategory);

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
  console.log(htmlProductCards);
  return '<section class="principal__similares"><h2 class="similares__titulo">Produtos similares</h2><section class="similares__cartoes">' + htmlProductCards.join(" ") + '</section></section>';
}
// Insere o HTML
$("main").innerHTML = generateProduct() + generateCards();