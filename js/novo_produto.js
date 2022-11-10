const messagesDefault = [
  "URL da imagem do produto",
  "Categoria do produto",
  "Nome do produto",
  "Preço do produto",
  "Descrição do produto"
];
const messagesSuccess = [
  "URL da imagem válida",
  "Categoria do produto válida",
  "Nome do produto válido",
  "Preço do produto válido",
  "Descrição do produto válido"
];
const messagesError = [
  "URL da imagem é inválida",
  "Categoria é muito curta",
  "Categoria é muito longa",
  "Nome é muito curto",
  "Nome é muito longo",
  "Preço é muito baixo",
  "Preço é muito alto",
  "Descrição é muito curta",
  "Descrição é muito longa"
];
const regexImage = new RegExp([
  "\.jpg$",
  "\.jpeg$",
  "\.gif$",
  "\.png$",
  "\.apng$",
  "\.svg$",
  "\.bmp$"].join("|"), "i");
const buttonAdd = document.getElementById("buttonAdd");
const labelList = $$(".formulario__container");
const labelTextList = $$(".formulario__container>.formulario__label");
const inputList = $$(".formulario__campo");
const formNovoProduto = $(".login__formulario");

var inputListStatus = [];
for(let i = 0; i < 5; i++) {
  inputListStatus.push(0);
}

// Testes
  

  // Inputs
  // URL da imagem
  inputList[0].addEventListener("focusout", () => {
    if(inputList[0].value == "") {
      classResult(labelList[0], undefined);
      labelResult(labelTextList[0], messagesDefault[0], "");
      inputListStatus[0] = 0;
    } else if(!regexImage.test(inputList[0].value)) {
      classResult(labelList[0], false);
      labelResult(labelTextList[0], messagesError[0], "");
      inputListStatus[0] = 0;
    } else {
      classResult(labelList[0], true);
      labelResult(labelTextList[0], messagesSuccess[0], "");
      inputListStatus[0] = 1;
    }
  });
  // Categoria
  inputList[1].addEventListener("focusout", () => {
    if(inputList[1].value == "") {
      classResult(labelList[1], undefined);
      labelResult(labelTextList[1], messagesDefault[1], "");
      inputListStatus[1] = 0;
    } else if(inputList[1].value.length < 1) {
      classResult(labelList[1], false);
      labelResult(labelTextList[1], messagesError[1], "");
      inputListStatus[1] = 0;
    } else if (inputList[1].value.length > 11) {
      classResult(labelList[1], false)
      labelResult(labelTextList[1], messagesError[2], "");
      inputListStatus[1] = 0;
    } else {
      classResult(labelList[1], true);
      labelResult(labelTextList[1], messagesSuccess[1], "");
      inputListStatus[1] = 1;
    }
  });
  // Nome
  inputList[2].addEventListener("focusout", () => {
    if(inputList[2].value == "") {
      classResult(labelList[2], undefined);
      labelResult(labelTextList[2], messagesDefault[2], "");
      inputListStatus[2] = 0;
    } else if(inputList[2].value.length < 3) {
      classResult(labelList[2], false)
      labelResult(labelTextList[2], messagesError[3], "");
      inputListStatus[2] = 0;
    } else if (inputList[2].value.length > 12) {
      classResult(labelList[2], false)
      labelResult(labelTextList[2], messagesError[4], "");
      inputListStatus[2] = 0;
    } else {
      classResult(labelList[2], true);
      labelResult(labelTextList[2], messagesSuccess[2], "");
      inputListStatus[2] = 1;
    }
  });
  // Preço
  inputList[3].addEventListener("focusout", () => {
    if(inputList[3].value == "") {
      classResult(labelList[3], undefined);
      labelResult(labelTextList[3], messagesDefault[3], "");
      inputListStatus[3] = 0;
    } else if(inputList[3].value < 0.99) {
      classResult(labelList[3], false)
      labelResult(labelTextList[3], messagesError[5], "");
      inputListStatus[3] = 0;
    } else if (inputList[3].value > 9999.99) {
      classResult(labelList[3], false)
      labelResult(labelTextList[3], messagesError[6], "");
      inputListStatus[3] = 0;
    } else {
      classResult(labelList[3], true);
      labelResult(labelTextList[3], messagesSuccess[3], "");
      inputListStatus[3] = 1;
    }
  });
  // Descrição
  inputList[4].addEventListener("focusout", () => {
    if(inputList[4].value == "") {
      classResult(labelList[4], undefined);
      labelResult(labelTextList[4], messagesDefault[4], "");
      inputListStatus[4] = 0;
    } else if(inputList[4].value.length < 20) {
      classResult(labelList[4], false)
      labelResult(labelTextList[4], messagesError[7], "");
      inputListStatus[4] = 0;
    } else if (inputList[4].value.length > 100) {
      classResult(labelList[4], false)
      labelResult(labelTextList[4], messagesError[8], "");
      inputListStatus[4] = 0;
    } else {
      classResult(labelList[4], true);
      labelResult(labelTextList[4], messagesSuccess[4], "");
      inputListStatus[4] = 1;
    }
  });
// Clique no botão de criar
buttonAdd.addEventListener("click", (event) => {
  event.preventDefault();
  if(inputListStatus.includes(0)) {
    alert("Os campos não foram preenchidos corretamente!");
  } else {
    let values = (() => {
      var inputs = $("form").querySelectorAll("label>input,label>textarea");
      var results = [];
      for(let i = 0; i < inputs.length; i++) {
        results[i] = inputs[i].value;
      }
      return results;
    })();
    new productHandler(values[0], values[1], values[2], values[3], values[4]);
    clearForm(formNovoProduto, messagesDefault);
    console.log(productListArray);
  }
});
