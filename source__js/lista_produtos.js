const productListMain = $("main>.principal__lista-cartao");
let tempArray = [];

// Insere os elementos
productListMain.innerHTML = (() => {
  for(let i = 0; i < productListArray._productList.length; i++) {
    tempArray[i] = 
    `
    <article class="lista-cartoes__cartao">
      <div class="cartao__imagem">
        ${(() => {
          if(!(JSON.parse(sessionStorage.getItem("login")) === null)) {
            if(JSON.parse(sessionStorage.getItem("login")).login === true) {
              return `
              <button href="#" class="imagem__deletar"></button>
              <a href="#" class="imagem__editar"></a>
              `
            }
          } else {
            return ``;
          }
        })()}
      </div>
  
      <a href="lista_produtos.html" class="cartao__descricao">
        <h2 class="descricao__titulo">${productListArray._productList[i]._name}</h2>
        <p class="descricao__preco">R$${productListArray._productList[i]._price}</p>
        <p class="descricao__link">Ver produto</p>
      </a>
    </article>
    `;
  }
  return tempArray.join(" ");
})();

// Adiciona a imagem no cartão
let htmlCardList = $$(".lista-cartoes__cartao>.cartao__imagem");
for(let i = 0; i < htmlCardList.length; i++) {
  if((/http/g).test(productListArray._productList[i]._img)) {
    htmlCardList[i].style.backgroundImage = `url(${(() => {
      return `${productListArray._productList[i]._img.match(/src="([^"]+)/)[1]})`;
    })()}`
  } else {
    htmlCardList[i].style.backgroundImage = `url(${(() => {
      return `../${productListArray._productList[i]._img.match(/src="([^"]+)/)[1]})`;
    })()}`
  }
}

// Condicionais
function productDeleteCond() {
  let productCategories = (() => {
    let categories = [];
    for(let i = 0; i < productListArray._productList.length; i++) {
      if(!(categories.includes(productListArray._productList[i]._category))) {
        categories.push(productListArray._productList[i]._category);
      }
    }
    return categories;
  })();
  let productCategoriesFill = (() => {
    let arr = [];
    for(let i = 0; i < productCategories.length; i++) {
      arr[i] = 0;
      for(let i2 = 0; i2 < productListArray._productList.length; i2++) {
        if(productCategories[i].includes(productListArray._productList[i2]._category)) {
          arr[i] += 1;
        }
      }
    }
    return arr;
  })();
  let productCategoriesFillCondition = (() => {
    let sum = 0;
    for(let i = 0; i < productCategoriesFill.length; i++) {
      if(productCategoriesFill[i] > 5) {
        sum += 1;
      }
    }
    return sum < 3 ? true : false;
  })();

  switch(true) {
    case productListArray._productList.length - 1 < 18:
      return 0;
    case productCategories.length < 3:
      return 1;
    case productCategoriesFillCondition:
      return 2;
    default:
      return -1;
  }
}

// Event listeners
// Editar produtos
let productEdit = $$(".cartao__imagem>.imagem__editar");
for(let i = 0; i < productEdit.length; i++) {
  productEdit[i].addEventListener("click", event => {
    event.preventDefault();
    sessionStorage.setItem("editProduct", JSON.stringify({edit: true, index: i}));
    window.location.href = "../html/novo_produto.html";
  });
}

// Deletar produtos
let productDelete = $$(".cartao__imagem>.imagem__deletar");
for(let i = 0; i < productDelete.length; i++) {
  productDelete[i].addEventListener("click", event => {
    switch(true) {
      case productDeleteCond() === -1:
        if(confirm(`Você tem certeza que quer deletar "${productListArray._productList[i]._name}"?`)) {
          productListArray._productList.splice(i, 1);
          localStorage.setItem("productListArray", JSON.stringify(productListArray._productList));
          location.reload();
        }
        break;
      case productDeleteCond() === 0:
        alert("Erro: é necessário haver um mínimo de 18 produtos.");
        break;
      case productDeleteCond() === 1:
        alert("Erro: é necessário haver um mínimo de 3 categorias diferentes.");
        break;
      case productDeleteCond() === 2:
        alert("Erro: é necessário haver pelo menos 6 produtos em 3 categorias diferentes.");
        break;
    }
  });
}

// Ver produtos
let linkViewProduct = $$(".lista-cartoes__cartao>a");
for(let i = 0; i < linkViewProduct.length; i++) {
  linkViewProduct[i].addEventListener("click", event => {
    event.preventDefault();
    let productCategory = productListArray._productList[i]._category;
    let productListArrayClone = JSON.parse(JSON.stringify(productListArray._productList));
    productListArrayClone.splice(i, 1);
    let productArray = [];
    sessionStorage.setItem("productOrderCurrent", JSON.stringify(productListArray._productList[i]));
    for(let i2 = 0; i2 < productListArrayClone.length; i2++) {
      if(productCategory === productListArrayClone[i2]._category) {
        productArray.push(productListArrayClone[i2]);
      }
    }
    (() => {
      for(let i = 0; productArray.length > 5; i++) {
        let randomNum = Math.floor(Math.random() * productArray.length);
        productArray.splice(randomNum, 1);
      }
    })();
    productArray = JSON.parse(JSON.stringify(productArray));
    sessionStorage.setItem("productOrderCategoryList", JSON.stringify(productArray));
    window.location.href = "../html/produto.html";
  });
}

if(sessionStorage.getItem("login") === null) {
  $(".heading__botao").remove();
}