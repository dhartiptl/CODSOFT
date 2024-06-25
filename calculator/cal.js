
const display = document.getElementById('result');

// Get the button elements
const buttons = document.querySelectorAll('.button-grid button');

// Initialize the calculator state
let currentNumber = '';
let previousNumber = '';
let operator = '';

// Add event listeners to the buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.value;

    // Handle number buttons
    if (value >= 0 && value <= 9) {
      currentNumber += value;
      display.value = currentNumber;
    }

    // Handle operator buttons
    else if (value === '+' || value === '-' || value === '*' || value === '/') {
      operator = value;
      previousNumber = currentNumber;
      currentNumber = '';
      display.value = previousNumber + ' ' + operator;
    }

    // Handle equal button
    else if (value === '=') {
      const result = calculate(previousNumber, operator, currentNumber);
      display.value = result;
      currentNumber = result;
      previousNumber = '';
      operator = '';
    }

    // Handle clear button
    else if (value === 'c') {
      currentNumber = '';
      previousNumber = '';
      operator = '';
      display.value = '';
    }
  });
});

// Calculate the result of the operation
function calculate(previousNumber, operator, currentNumber) {
  let result = 0;

  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
  }

  return result.toString();
}