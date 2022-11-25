if(!(/\/index\.html$/i).test(window.location.href)) {
  window.location.href += "index.html";
};
const main = $("main");
const productViewArray = new productView(productListArray);
function indexSectionGenerator(array, category) {
  let htmlCards = [];
  (() => {
    for(let i = 0; i < 6; i++) {
      htmlCards.push(
      `
      <a href="html/produto.html" class="container__cartao">
        <img ${array._categoryList[category][i]._img} class="cartao__imagem">

        <div class="cartao__descricao">
          <h2 class="descricao__titulo">${array._categoryList[category][i]._name}</h2>
          <p class="descricao__preco">R$${array._categoryList[category][i]._price}</p>
          <p class="descricao__link">Ver produto</p>
        </div>
      </a>
      `
      )
    } 
  })();
  return htmlCards.join(" ");
}

function indexMainGenerator(productArray) {
  sessionStorage.setItem("productOrderList", JSON.stringify(productArray._categoryList));
  let productViewIndex = [indexSectionGenerator(productArray, 0), indexSectionGenerator(productArray, 1), indexSectionGenerator(productArray, 2)];
  for(let i = 0; i < 3; i++) {
    let mainSection = document.createElement("section");
    mainSection.classList.add("principal__secoes");
    mainSection.innerHTML = 
    `
    <div class="secoes__header">
      <h2 class="secoes__titulo">${productArray._categoryList[i][0]._category}</h2>
      <a href="html/lista_produtos.html" class="secoes__link">Ver tudo</a>
    </div>

    <section class="secoes__container">${productViewIndex[i]}</section>
    `
    main.appendChild(mainSection);
  }
}

indexMainGenerator(productViewArray);

// Link para a página com descrição
let indexCards = $$(".container__cartao");
let indexProductList = JSON.parse(sessionStorage.getItem("productOrderList"));
for(let i = 0; i < 18; i++) {
  indexCards[i].addEventListener("click", event => {
    var indexProductListSlice = [];
    switch(true) {
      case(i > 11):
        sessionStorage.setItem("productOrderCurrent", JSON.stringify(indexProductList[2][(i-12)]));
        indexProductListSlice = JSON.parse(JSON.stringify(indexProductList[0]));
        indexProductListSlice.splice(i-12, 1);
        sessionStorage.setItem("productOrderCategoryList", JSON.stringify(indexProductListSlice));
        break;
      case(i > 5):
        sessionStorage.setItem("productOrderCurrent", JSON.stringify(indexProductList[1][(i-6)]));
        indexProductListSlice = JSON.parse(JSON.stringify(indexProductList[0]));
        indexProductListSlice.splice(i-6, 1);
        sessionStorage.setItem("productOrderCategoryList", JSON.stringify(indexProductListSlice));
        break;
      default:
        sessionStorage.setItem("productOrderCurrent", JSON.stringify(indexProductList[0][i]));
        indexProductListSlice = JSON.parse(JSON.stringify(indexProductList[0]));
        indexProductListSlice.splice(i, 1);
        sessionStorage.setItem("productOrderCategoryList", JSON.stringify(indexProductListSlice));
        break;
    }
  });
}