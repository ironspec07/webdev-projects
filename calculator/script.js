let result = document.getElementById("result");

function insert(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function backspace() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  let expression = result.value;
  let answer = eval(expression);
  result.value = answer;
}