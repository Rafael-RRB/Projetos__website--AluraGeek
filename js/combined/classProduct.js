class product{constructor(t,r,i,s,e){this._img=t,this._category=r,this._name=i,this._price=s,this._description=e}}class productHandler{constructor(t,r,i,s,e,a,o){if(this._img=t.toString(),this._imgFormatted='src="'+this._img+'"',this._category=this.formatString(r),this._name=this.formatString(i),this._price=parseFloat(s),this._priceFormatted=this._price.toLocaleString("pt-br",{minimumFractionDigits:2,maximumFractionDigits:2}),this._description=e,this._imgTest=regexImage.test(this._img),this._categoryTest=!(this._category.length<1||this._category.length>11),this._nameTest=!(this._name.length<3||this._name.length>12),this._priceTest=!(this._price<.99||this._price>9999.99),this._descriptionTest=!(this._description.length<20||this._description.length>100),!(this._imgTest&&this._categoryTest&&this._nameTest&&this._priceTest&&this._descriptionTest))throw"Invalid data: one or more parameters are not properly formatted.";if(0===a)productListArray.addProduct(new product(this._imgFormatted,this._category,this._name,this._priceFormatted,this._description));else{if(1!==a)throw"Invalid parameter: action should either be 0 (add) or 1 (edit).";productListArray.editProduct(new product(this._imgFormatted,this._category,this._name,this._priceFormatted,this._description),o)}}formatString(t){let r=(t=t.toString().toLocaleLowerCase()).match(/\b[^\s]+/g);for(let t=0;t<r.length;t++){let i=r[t][0].toLocaleUpperCase(),s=(()=>{let i=[];for(let s=1;s<r[t].length;s++)i.push(r[t][s]);return i})();r[t]=i+s.join("")}return r.join(" ")}}class productList{constructor(){this._productList=[]}addProduct(t){this._productList.push(t),localStorage.setItem("productListArray",JSON.stringify(this._productList))}editProduct(t,r){this._productList[r]=t,localStorage.setItem("productListArray",JSON.stringify(this._productList))}}class productView{constructor(t){this._array=t,this._categoryList=(()=>{var t=[[],[],[]],r=[],i=[];return(()=>{for(let t=0;t<this._array._productList.length;t++)r.includes(this._array._productList[t]._category)?i[r.indexOf(this._array._productList[t]._category)]+=1:(r.push(this._array._productList[t]._category),i[r.indexOf(this._array._productList[t]._category)]=1);for(var s=0;s<r.length;s++)i[s]<6&&(r.splice(s,1),i.splice(s,1),s--);r=this.randomArray(r,3);for(let i=0;i<this._array._productList.length;i++)switch(!0){case r[0].includes(this._array._productList[i]._category):t[0].push(this._array._productList[i]);break;case r[1].includes(this._array._productList[i]._category):t[1].push(this._array._productList[i]);break;case r[2].includes(this._array._productList[i]._category):t[2].push(this._array._productList[i])}})(),[this.randomArray(t[0],6),this.randomArray(t[1],6),this.randomArray(t[2],6)]})()}randomArray(t,r){var i=[].concat(t),s=[];r<1&&(r=1);for(let t=0;t<r;t++){let t=Math.floor(Math.random()*i.length);s.push(i[t]),i.splice(t,1)}return s}}