/\/index\.html$/i.test(window.location.href)||(window.location.href+="index.html");const main=$("main"),productViewArray=new productView(productListArray);function indexSectionGenerator(e,t){let r=[];return(()=>{for(let i=0;i<6;i++)r.push(`\n <a href="html/produto.html" class="container__cartao">\n <img ${e._categoryList[t][i]._img} class="cartao__imagem" loading="lazy">\n\n <div class="cartao__descricao">\n <h2 class="descricao__titulo">${e._categoryList[t][i]._name}</h2>\n <p class="descricao__preco">R$${e._categoryList[t][i]._price}</p>\n <p class="descricao__link">Ver produto</p>\n </div>\n </a>\n `)})(),r.join(" ")}function indexMainGenerator(e){sessionStorage.setItem("productOrderList",JSON.stringify(e._categoryList));let t=[indexSectionGenerator(e,0),indexSectionGenerator(e,1),indexSectionGenerator(e,2)];for(let r=0;r<3;r++){let i=document.createElement("section");i.classList.add("principal__secoes"),i.innerHTML=`\n <div class="secoes__header">\n <h2 class="secoes__titulo">${e._categoryList[r][0]._category}</h2>\n <a href="html/lista_produtos.html" class="secoes__link">Ver tudo</a>\n </div>\n\n <section class="secoes__container">${t[r]}</section>\n `,main.appendChild(i)}}indexMainGenerator(productViewArray);let indexCards=$$(".container__cartao"),indexProductList=JSON.parse(sessionStorage.getItem("productOrderList"));for(let e=0;e<18;e++)indexCards[e].addEventListener("click",t=>{var r=[];switch(!0){case e>11:sessionStorage.setItem("productOrderCurrent",JSON.stringify(indexProductList[2][e-12])),(r=JSON.parse(JSON.stringify(indexProductList[0]))).splice(e-12,1),sessionStorage.setItem("productOrderCategoryList",JSON.stringify(r));break;case e>5:sessionStorage.setItem("productOrderCurrent",JSON.stringify(indexProductList[1][e-6])),(r=JSON.parse(JSON.stringify(indexProductList[0]))).splice(e-6,1),sessionStorage.setItem("productOrderCategoryList",JSON.stringify(r));break;default:sessionStorage.setItem("productOrderCurrent",JSON.stringify(indexProductList[0][e])),(r=JSON.parse(JSON.stringify(indexProductList[0]))).splice(e,1),sessionStorage.setItem("productOrderCategoryList",JSON.stringify(r))}});