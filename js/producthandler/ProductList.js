class productList {
  constructor() {
    this._productList = [];
  }

  addProduct(product) {
    this._productList.push(product);
    localStorage.setItem("productListArray", JSON.stringify(this._productList));
  }

  editProduct(product, index) {
    this._productList[index] = product;
    localStorage.setItem("productListArray", JSON.stringify(this._productList));
  }
}