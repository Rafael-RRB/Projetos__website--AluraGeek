const sessionStorageProduct=JSON.parse(sessionStorage.getItem("productOrderCurrent")),sessionStorageCategory=JSON.parse(sessionStorage.getItem("productOrderCategoryList")),mainProductImg=$(".principal__produto>img"),mainProductTitle=$(".produto__texto>h1"),mainProductPrice=$(".produto__texto>h2"),mainProductDescription=$(".produto__texto>p");function generateProduct(){return`\n <section class="principal__produto">\n <img ${sessionStorageProduct._img.replace(/img/g,"../img")} class="produto__imagem">\n \n <section class="produto__texto">\n <h1 class="produto__titulo">${sessionStorageProduct._name}</h1>\n <h2 class="produto__preco">R$${sessionStorageProduct._price}</h2>\n <p class="produto__descricao">${sessionStorageProduct._description}</p>\n </section>\n </section>\n `}function generateCards(){var t=[];for(let r=0;r<sessionStorageCategory.length;r++)t.push(`\n <a href="#" class="container__cartao">\n <img ${sessionStorageCategory[r]._img.replace(/img/g,"../img")} class="cartao__imagem">\n\n <div class="cartao__descricao">\n <h2 class="cartao__titulo">${sessionStorageCategory[r]._name}</h2>\n <p class="cartao__preco">R$${sessionStorageCategory[r]._price}</p>\n <p class="cartao__link">Ver produto</p>\n </div>\n </a>\n `);return'<section class="principal__similares"><h2 class="similares__titulo">Produtos similares</h2><section class="similares__cartoes">'+t.join(" ")+"</section></section>"}$("main").innerHTML=generateProduct()+generateCards();const currentProductCat=sessionStorageProduct._category,currentProductList=(()=>{let t=JSON.parse(sessionStorage.getItem("productOrderList"));for(let r=0;r<3;r++)if(t[r][0]._category===currentProductCat)return t[r]})();let indexCards=$$(".container__cartao"),indexProductList=JSON.parse(sessionStorage.getItem("productOrderList"));for(let t=0;t<5;t++)indexCards[t].addEventListener("click",r=>{var e=JSON.stringify(sessionStorageCategory[t]);sessionStorage.setItem("productOrderCurrent",e);for(let t=0;t<currentProductList.length;t++)if(e===JSON.stringify(currentProductList[t])){let r=JSON.parse(JSON.stringify(currentProductList));r.splice(t,1),sessionStorage.setItem("productOrderCategoryList",JSON.stringify(r))}history.scrollRestoration="manual",window.scrollTo(0,0),location.reload()});