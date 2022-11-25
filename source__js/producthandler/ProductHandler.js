class productHandler {
  constructor(img, category, name, price, description, action, index) {
    this._img = img.toString();
    this._imgFormatted = 'src="' + this._img + '"';
    this._category = this.formatString(category);
    this._name = this.formatString(name);
    this._price = parseFloat(price);
    this._priceFormatted = this._price.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    this._description = description;
    this._imgTest = regexImage.test(this._img);
    this._categoryTest = !(this._category.length < 1) && !(this._category.length > 11);
    this._nameTest = !(this._name.length < 3) && !(this._name.length > 12);
    this._priceTest = !(this._price < 0.99) && !(this._price > 9999.99);
    this._descriptionTest = !(this._description.length < 20) && !(this._description.length > 100);

    if(this._imgTest && this._categoryTest && this._nameTest && this._priceTest && this._descriptionTest) {
      if(action === 0) {
        productListArray.addProduct(new product(this._imgFormatted, this._category, this._name, this._priceFormatted, this._description));
      } else if (action === 1) {
        productListArray.editProduct(new product(this._imgFormatted, this._category, this._name, this._priceFormatted, this._description), index);
      } else {
        throw "Invalid parameter: action should either be 0 (add) or 1 (edit).";
      }
    } else {
      throw "Invalid data: one or more parameters are not properly formatted.";
    }
  }

  formatString(string) {
    string = string.toString().toLocaleLowerCase();
    let stringMatches = string.match(/\b[^\s]+/g);
    for(let i = 0; i < stringMatches.length; i++) {
        let firstLetter = stringMatches[i][0].toLocaleUpperCase();
        let fullWord = (() => {
            let tempVar = [];
            for(let i2 = 1; i2 < stringMatches[i].length; i2++) {
                tempVar.push(stringMatches[i][i2]);
            }
            return tempVar;
        })();
        stringMatches[i] = firstLetter + fullWord.join("");
    }
    return stringMatches.join(" ");
  }
}