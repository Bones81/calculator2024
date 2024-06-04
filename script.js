// SET SELECTORS AND BUTTON REFERENCES
const display = document.querySelector('#display')
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const btn3 = document.querySelector('#btn-3')
const btn4 = document.querySelector('#btn-4')
const btn5 = document.querySelector('#btn-5')
const btn6 = document.querySelector('#btn-6')
const btn7 = document.querySelector('#btn-7')
const btn8 = document.querySelector('#btn-8')
const btn9 = document.querySelector('#btn-9')
const btn0 = document.querySelector('#btn-0')
const plusMinusBtn = document.querySelector('#plus-minus-btn')
const decimalBtn = document.querySelector('#decimal-btn')
const allClearBtn = document.querySelector('#all-clear-btn')
const clearBtn = document.querySelector('#clear-btn')
const sqrtBtn = document.querySelector("#sqrt-btn");
const addBtn = document.querySelector('#add-btn')
const subtractBtn = document.querySelector('#subtract-btn')
const multiplyBtn = document.querySelector('#multiply-btn')
const divideBtn = document.querySelector('#divide-btn')
const equalsBtn = document.querySelector('#equals-btn')
let operand1 = null
let operand2 = null
let operator = ''
let isOperatorSelected = false

// SET OPERATOR FUNCTIONS
function add(a,b) {
    return a + b
}

function subtract(a,b) {
    return a - b
}

function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    if (b === 0) return '!DIV BY 0!'
    return a / b
}

// SET DECIMAL LOGIC
function addDecimal() {
    if(display.textContent.includes('.')) return
    display.textContent += '.'
}

decimalBtn.addEventListener('click', addDecimal)

function clickClear() {
    display.textContent = ''
}

clearBtn.addEventListener('click', clickClear)

allClearBtn.addEventListener('click', () => {
    clickClear()
    //Also clear operands in memory
    operand1 = null
    operand2 = null
    operator = ''
    isOperatorSelected = false
})

// SET toggle of display text when clicking +/- button
function togglePositiveNegative() {
    if (display.textContent.includes('-')) {
        display.textContent = display.textContent.slice(1)
    } else {
        display.textContent = '-' + display.textContent
    }
}

plusMinusBtn.addEventListener('click', togglePositiveNegative)

// ADD Listener to each number button to update display text
const numberBtns = document.querySelectorAll('.number')
numberBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => clickNumber(e))
})

function clickNumber(event) {
    // If operand 1 is equal to what is currently in the display, clear the display so that a new number can be typed in
    if (operand1 === Number(display.textContent)) {
        display.textContent = ''
    }
    // ENSURE display never has more than 10 digits (including any decimals)
    if(display.textContent.length < 10) {
        display.textContent += event.target.textContent
    }

}

function assignToOperand1() {
    operand1 = Number(display.textContent)
}

function assignToOperand2() {
    // Ensure operand1 exists first
    if (operand1 === null) return
    operand2 = Number(display.textContent)
}


// OPERATOR BUTTON FUNCTIONS
const operators = document.querySelectorAll('.operator')
operators.forEach(btn => btn.addEventListener('click', (e) => {
    // Once operator is clicked, the number in the display becomes operand1.
    assignToOperand1()
    // Operator is assigned
    operator = e.target.textContent
    isOperatorSelected = true
}))

// ADD SQUARE ROOT LISTENER
sqrtBtn.addEventListener("click", () => {
  operator = "√";
  performCalculation();
});

// SET OPERATE FUNCTION
function operate(op, a, b) {
    switch (op) {
        // Addition case
        case "+":
            return add(a, b);
            break;
        // Subtraction case
        case "-":
            return subtract(a, b);
            break;
        // Multiplication case
        case "*":
            return multiply(a, b);
            break;
        // Division case
        case "/":
            return divide(a, b);
            break;
        case "√":
            return Math.sqrt(a);
        // No operator chosen
        default:
            alert(
                "An error has occurred. Cannot calculate when no operator has been selected."
            );
    }
}

function performCalculation() {
    if (operator === "√") {
        assignToOperand1();
        display.textContent = operate(operator, operand1, operand2);
        operand1 = Number(display.textContent);
    } else {
        if (isOperatorSelected) {
            assignToOperand2();
        } 
        display.textContent = operate(operator, operand1, operand2);
        operand1 = Number(display.textContent);
        isOperatorSelected = false
    }
}
                    
equalsBtn.addEventListener('click', performCalculation)