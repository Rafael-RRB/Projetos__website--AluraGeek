class productHandler {
  constructor(img, category, name, price, description) {
    this._img = img.toString();
    this._imgFormatted = 'src="' + this._img + '"';
    this._category = category.toString();
    this._name = name.toString();
    this._price = parseFloat(price);
    this._priceFormatted = this._price.toLocaleString("pt-br", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    this._description = description.toString();
    this._imgTest = regexImage.test(this._img);
    this._categoryTest = !(this._category.length < 1) && !(this._category.length > 11);
    this._nameTest = !(this._name.length < 3) && !(this._name.length > 12);
    this._priceTest = !(this._price < 0.99) && !(this._price > 9999.99);
    this._descriptionTest = !(this._description.length < 20) && !(this._description.length > 100);
    console.log(this._price);
    console.log(this._priceFormatted);
    if(this._imgTest && this._categoryTest && this._nameTest && this._priceTest && this._descriptionTest) {
      productListArray.addProduct(new product(this._imgFormatted, this._category, this._name, this._priceFormatted, this._description));
    } else {
      throw "InvalidData: one or more parameters are not properly formatted.";
    }
  }
}