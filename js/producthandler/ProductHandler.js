class productHandler{constructor(t,i,e,r,s,o,h){if(this._img=t.toString(),this._imgFormatted='src="'+this._img+'"',this._category=this.formatString(i),this._name=this.formatString(e),this._price=parseFloat(r),this._priceFormatted=this._price.toLocaleString("pt-br",{minimumFractionDigits:2,maximumFractionDigits:2}),this._description=s,this._imgTest=regexImage.test(this._img),this._categoryTest=!(this._category.length<1||this._category.length>11),this._nameTest=!(this._name.length<3||this._name.length>12),this._priceTest=!(this._price<.99||this._price>9999.99),this._descriptionTest=!(this._description.length<20||this._description.length>100),!(this._imgTest&&this._categoryTest&&this._nameTest&&this._priceTest&&this._descriptionTest))throw"Invalid data: one or more parameters are not properly formatted.";if(0===o)productListArray.addProduct(new product(this._imgFormatted,this._category,this._name,this._priceFormatted,this._description));else{if(1!==o)throw"Invalid parameter: action should either be 0 (add) or 1 (edit).";productListArray.editProduct(new product(this._imgFormatted,this._category,this._name,this._priceFormatted,this._description),h)}}formatString(t){let i=(t=t.toString().toLocaleLowerCase()).match(/\b[^\s]+/g);for(let t=0;t<i.length;t++){let e=i[t][0].toLocaleUpperCase(),r=(()=>{let e=[];for(let r=1;r<i[t].length;r++)e.push(i[t][r]);return e})();i[t]=e+r.join("")}return i.join(" ")}}