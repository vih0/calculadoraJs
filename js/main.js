const display = document.querySelector("#display");
let currentNumber = "";
let previousNumber = "";
let selectedOperator = "";

for (let i = 0; i <= 9; i++) {
  let botao = document.getElementById("_" + i);

  if (botao) {
    botao.addEventListener("click", function () {
      let conteudo = this.textContent;
      currentNumber += conteudo;
      display.textContent = currentNumber;
    });
  }
}

const operator = document.querySelectorAll("[id=operator]");

for (let op of operator) {
  let aux = op;
  aux.addEventListener("click", () => {
    switch (aux.textContent) {
      case "+":
        selectedOperator = "+";
        break;
      case "-":
        selectedOperator = "-";
        break;
      case "x":
        selectedOperator = "x";
        break;
      case "/":
        selectedOperator = "/";
        break;
    }
    previousNumber = currentNumber;
    currentNumber = "";
  });
}

const equalButton = document.getElementById("equal");
equalButton.addEventListener("click", () => {
  let result;
  switch (selectedOperator) {
    case "+":
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case "-":
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case "x":
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case "/":
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }
  display.textContent = result;
  currentNumber = result.toString();
  previousNumber = "";
});

const clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", () => {
  display.textContent = "";
  previousNumber = "";
  currentNumber = "";
});
