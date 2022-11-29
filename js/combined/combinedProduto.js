class product{constructor(t,e,r,s,o){this._img=t,this._category=e,this._name=r,this._price=s,this._description=o}}class productHandler{constructor(t,e,r,s,o,i,a){if(this._img=t.toString(),this._imgFormatted='src="'+this._img+'"',this._category=this.formatString(e),this._name=this.formatString(r),this._price=parseFloat(s),this._priceFormatted=this._price.toLocaleString("pt-br",{minimumFractionDigits:2,maximumFractionDigits:2}),this._description=o,this._imgTest=regexImage.test(this._img),this._categoryTest=!(this._category.length<1||this._category.length>11),this._nameTest=!(this._name.length<3||this._name.length>12),this._priceTest=!(this._price<.99||this._price>9999.99),this._descriptionTest=!(this._description.length<20||this._description.length>100),!(this._imgTest&&this._categoryTest&&this._nameTest&&this._priceTest&&this._descriptionTest))throw"Invalid data: one or more parameters are not properly formatted.";if(0===i)productListArray.addProduct(new product(this._imgFormatted,this._category,this._name,this._priceFormatted,this._description));else{if(1!==i)throw"Invalid parameter: action should either be 0 (add) or 1 (edit).";productListArray.editProduct(new product(this._imgFormatted,this._category,this._name,this._priceFormatted,this._description),a)}}formatString(t){let e=(t=t.toString().toLocaleLowerCase()).match(/\b[^\s]+/g);for(let t=0;t<e.length;t++){let r=e[t][0].toLocaleUpperCase(),s=(()=>{let r=[];for(let s=1;s<e[t].length;s++)r.push(e[t][s]);return r})();e[t]=r+s.join("")}return e.join(" ")}}class productList{constructor(){this._productList=[]}addProduct(t){this._productList.push(t),localStorage.setItem("productListArray",JSON.stringify(this._productList))}editProduct(t,e){this._productList[e]=t,localStorage.setItem("productListArray",JSON.stringify(this._productList))}}null===sessionStorage.getItem("editProduct")||/\/novo_produto\.html$/.test(window.location.href)||sessionStorage.removeItem("editProduct");const hrefDocument=window.location.href,$=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document),regexHREF=new RegExp(["/index.html$","/lista_produtos.html$","/novo_produto.html$","/produto.html$","/login.html$"].join("|"),"i"),regexHREFLogin=/\/login\.html$/;if(/\b\/index\.html\b/.test(hrefDocument))concatHref=["","html/"];else var concatHref=["../",""];function clearLocalStorage(){localStorage.clear(),sessionStorage.clear(),window.location.href="../html/index.html"}function classResult(t,e){!1===e?(t.classList.add("js__failure"),t.classList.remove("js__success")):!0===e?(t.classList.add("js__success"),t.classList.remove("js__failure")):(t.classList.remove("js__failure"),t.classList.remove("js__success"))}function labelResult(t,e,r){t.innerText=`${e} ${r}`}function addEventListenerForm(t,e,r,s,o,i,a){e.addEventListener(r,r=>{var c=s.length;if(""==e.value)labelResult(t.querySelector("p"),o,""),classResult(t,void 0);else{for(let r=0;r<s.length;r++)s[r].test(e.value)||(labelResult(t.querySelector("p"),i[r],"[X]"),c--);c<s.length?classResult(t,!1):(labelResult(t.querySelector("p"),a,"[✓]"),classResult(t,!0))}})}function clearForm(t,e){let r=t.querySelectorAll("label"),s=t.querySelectorAll("input,textarea");r.forEach((t,r,s)=>{s[r].querySelector("p").innerText=e[r],s[r].classList.remove("js__failure"),s[r].classList.remove("js__success")}),s.forEach((t,e,r)=>{r[e].value=""})}if(regexHREF.test(window.location.href)){var productListArray=new productList;if(null!==localStorage.getItem("productListArray")){var lsArray=JSON.parse(localStorage.getItem("productListArray"));for(let t=0;t<lsArray.length;t++)productListArray._productList[t]=new product(lsArray[t]._img,lsArray[t]._category,lsArray[t]._name,lsArray[t]._price,lsArray[t]._description)}else{function pImgSRC(t){return` \n srcset="img/products/product__${t}--size1.webp 126w,\n img/products/product__${t}--size2.webp 174w,\n img/products/product__${t}--size3.webp 261w,\n img/products/product__${t}--size4.webp 348w"\n sizes="(max-width: 280px) 126px,\n (max-width: 428px) 193px,\n (max-width: 768px) 216px,\n (max-width: 1024px) 296px,\n (max-width: 1280px) 152px,\n 100vw"\n src="img/products/product__${t}--size1.webp" alt="" `}function pName(t){return`Produto #${t}`}function pDesc(){return"Lorem ipsum dolor sit amet. Vel voluptates quaerat et esse amet sed quisquam similique ut obcaecati."}function pGenerate(t,e){for(let r=0;r<6;r++)productListArray._productList.push(new product(pImgSRC(e),t,pName(e),42..toLocaleString("pt-br",{minimumFractionDigits:2,maximumFractionDigits:2}),pDesc())),e++}pGenerate("Star Wars",1),pGenerate("Consoles",7),pGenerate("Diversos",13)}}const sessionStorageProduct=JSON.parse(sessionStorage.getItem("productOrderCurrent")),sessionStorageCategory=JSON.parse(sessionStorage.getItem("productOrderCategoryList")),mainProductImg=$(".principal__produto>img"),mainProductTitle=$(".produto__texto>h1"),mainProductPrice=$(".produto__texto>h2"),mainProductDescription=$(".produto__texto>p");function generateProduct(){return`\n <section class="principal__produto">\n <img ${sessionStorageProduct._img.replace(/img/g,"../img")} class="produto__imagem">\n \n <section class="produto__texto">\n <h1 class="produto__titulo">${sessionStorageProduct._name}</h1>\n <h2 class="produto__preco">R$${sessionStorageProduct._price}</h2>\n <p class="produto__descricao">${sessionStorageProduct._description}</p>\n </section>\n </section>\n `}function generateCards(){var t=[];for(let e=0;e<sessionStorageCategory.length;e++)t.push(`\n <a href="#" class="container__cartao">\n <img ${sessionStorageCategory[e]._img.replace(/img/g,"../img")} class="cartao__imagem">\n\n <div class="cartao__descricao">\n <h2 class="cartao__titulo">${sessionStorageCategory[e]._name}</h2>\n <p class="cartao__preco">R$${sessionStorageCategory[e]._price}</p>\n <p class="cartao__link">Ver produto</p>\n </div>\n </a>\n `);return'<section class="principal__similares"><h2 class="similares__titulo">Produtos similares</h2><section class="similares__cartoes">'+t.join(" ")+"</section></section>"}$("main").innerHTML=generateProduct()+generateCards();const currentProductCat=sessionStorageProduct._category,currentProductList=(()=>{let t=JSON.parse(sessionStorage.getItem("productOrderList"));for(let e=0;e<3;e++)if(t[e][0]._category===currentProductCat)return t[e]})();let indexCards=$$(".container__cartao"),indexProductList=JSON.parse(sessionStorage.getItem("productOrderList"));for(let t=0;t<5;t++)indexCards[t].addEventListener("click",e=>{var r=JSON.stringify(sessionStorageCategory[t]);sessionStorage.setItem("productOrderCurrent",r);for(let t=0;t<currentProductList.length;t++)if(r===JSON.stringify(currentProductList[t])){let e=JSON.parse(JSON.stringify(currentProductList));e.splice(t,1),sessionStorage.setItem("productOrderCategoryList",JSON.stringify(e))}history.scrollRestoration="manual",window.scrollTo(0,0),location.reload()});