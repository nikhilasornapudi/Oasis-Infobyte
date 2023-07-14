let currentNumber = '';
let firstOperand = '';
let operator = '';

function appendNumber(number) {
  currentNumber += number;
  document.getElementById('display').value = currentNumber;
}

function appendOperator(op) {
  if (currentNumber === '' && op === '-') {
    currentNumber = '-';
    document.getElementById('display').value = currentNumber;
    return;
  }

  if (currentNumber !== '' && op === '√') {
    const num = parseFloat(currentNumber);
    const result = Math.sqrt(num);
    currentNumber = result.toString();
    document.getElementById('display').value = currentNumber;
    return;
  }

  if (currentNumber !== '' && op === '%') {
    const num = parseFloat(currentNumber);
    const result = num / 100;
    currentNumber = result.toString();
    document.getElementById('display').value = currentNumber;
    return;
  }

  firstOperand = currentNumber;
  operator = op;
  currentNumber = '';
}

function clearDisplay() {
  currentNumber = '';
  firstOperand = '';
  operator = '';
  document.getElementById('display').value = '';
}

function deleteLastDigit() {
  if (currentNumber.length > 0) {
    currentNumber = currentNumber.slice(0, -1);
    document.getElementById('display').value = currentNumber;
  } else if (operator !== '') {
    operator = '';
  } else if (firstOperand !== '') {
    firstOperand = '';
  }
}


function calculate() {
  const num1 = parseFloat(firstOperand);
  const num2 = parseFloat(currentNumber);
  let result = '';

  if (operator === '+') {
    result = num1 + num2;
  } else if (operator === '-') {
    result = num1 - num2;
  } else if (operator === '*') {
    result = (num1 * num2).toFixed(2);
  } else if (operator === '/') {
    result = num1 / num2;
  }

  currentNumber = result.toString();
  document.getElementById('display').value = currentNumber;

  // Reset the firstOperand and operator for further calculations if needed
  firstOperand = '';
  operator = '';
}

function appendDecimalPoint() {
  if (!currentNumber.includes('.')) {
    currentNumber += '.';
    document.getElementById('display').value = currentNumber;
  }
}
