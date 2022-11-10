const main = $("main");
const productViewArray = new productView(productListArray);
function indexSectionGenerator(array, category) {
  let htmlCards = [];
  (() => {
    for(let i = 0; i < 6; i++) {
      htmlCards.push(
      `
      <a href="#" class="container__cartao">
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
  let productViewIndex = [indexSectionGenerator(productArray, 0), indexSectionGenerator(productArray, 1), indexSectionGenerator(productArray, 2)];
  for(let i = 0; i < 3; i++) {
    let mainSection = document.createElement("section");
    mainSection.innerHTML = 
    `
    <section class="principal__secoes">
      <div class="secoes__header">
        <h2 class="secoes__titulo">${productArray._categoryList[i][0]._category}</h2>
        <a href="" class="secoes__link">Ver tudo</a>
      </div>

      <section class="secoes__container">${productViewIndex[i]}</section>
    </section>
    `
    main.appendChild(mainSection);
  }
}

indexMainGenerator(productViewArray);
