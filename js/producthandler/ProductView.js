class productView {
  constructor(array) {
    this._array = array;
    this._categoryList = (() => {
      var categoriesArray = [[],[],[]];
      var categories = [];
      var repeat = [];
      // Define as categorias válidas
      (() => {
        for(let i = 0; i < this._array._productList.length; i++) {
          if(categories.includes(this._array._productList[i]._category)) {
            repeat[categories.indexOf(this._array._productList[i]._category)] += 1;
          } else {
            categories.push(this._array._productList[i]._category);
            repeat[categories.indexOf(this._array._productList[i]._category)] = 1;
          }
        }
        // Remove as categorias inválidas
        for(var i = 0; i < categories.length; i++) {
          if(repeat[i] < 6) {
            categories.splice(i, 1);
            repeat.splice(i, 1);
            i--;
          }
        }
        // Escolhe 3 categorias aleatórias das que sobraram
        categories = this.randomArray(categories, 3);
        // Empurra os itens das categorias
        for(let i = 0; i < this._array._productList.length; i++) {
          switch(true) {
            case categories[0].includes(this._array._productList[i]._category):
              categoriesArray[0].push(this._array._productList[i]);
              break;
            case categories[1].includes(this._array._productList[i]._category):
              categoriesArray[1].push(this._array._productList[i]);
              break;
            case categories[2].includes(this._array._productList[i]._category):
              categoriesArray[2].push(this._array._productList[i]);  
              break;
          }
        }
      })();      
      return [this.randomArray(categoriesArray[0], 6), this.randomArray(categoriesArray[1], 6), this.randomArray(categoriesArray[2], 6)];
    })();
  }
  //


  // Pega uma array, retorna outra com NUM itens
  randomArray(array, num) {
    var oldArray = [].concat(array);
    var newArray = [];
    // Reduz erros se o NUM passado for inválido
    if(num < 1) num = 1;
    for(let i = 0; i < num; i++) {
      let randomNum = Math.floor(Math.random() * oldArray.length);
      newArray.push(oldArray[randomNum]);
      oldArray.splice(randomNum, 1);
    }
    return newArray;
  }
}