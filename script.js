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
const addBtn = document.querySelector('#add-btn')
const subtractBtn = document.querySelector('#subtract-btn')
const multiplyBtn = document.querySelector('#multiply-btn')
const divideBtn = document.querySelector('#divide-btn')
const equalsBtn = document.querySelector('#equals-btn')
let operand1 = null
let operand2 = null
let operator = ''

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
    if (b === 0) return 'CANNOT DIV BY 0'
    return a / b
}

// SET DECIMAL LOGIC
function addDecimal() {
    if(display.textContent.includes('.')) return
    display.textContent += '.'
}

// ADD Listener to each number button to update display text
const numberBtns = document.querySelectorAll('.number')
numberBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => clickNumber(e))
})

decimalBtn.addEventListener('click', addDecimal)

function clickNumber(event) {
    // If operand 1 is equal to what is currently in the display, clear the display and start a new operand
    if (operand1 === Number(display.textContent)) {
        display.textContent = ''
    }
    // ENSURE display never has more than 10 digits (including any decimals)
    if(display.textContent.length < 10) {
        display.textContent += event.target.textContent
    }

}

function assignToOperand() {
    // If there is no operand1 yet, assign the value of the display to it.
    if (operand1 === null) {
        operand1 = Number(display.textContent)
    }
    // If there is an operand1 already, assign the value of the display to operand2.
    if (operand1 || operand1 === 0) {
    operand2 = Number(display.textContent);
    }
}

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

// OPERATOR BUTTON FUNCTIONS
const operators = document.querySelectorAll('.operator')
operators.forEach( btn => btn.addEventListener('click', (e) => {
    if (e.target.id === 'equals-btn') {
        operate(operator, operand1, operand2)
    } else {
        operator = e.target.textContent
        // Once operator is clicked, the number in the display becomes operand1.
        operand1 = Number(display.textContent)
        // The next keystroke needs to clear the display before starting the next operand.
    }

}))

// SET OPERATE FUNCTION
function operate(op, a, b) {
    switch(op) {
        case '+':
            return add(a,b)
            break
        case '-':
            return subtract(a,b)
            break
        case '*':
            return multiply(a,b)
            break;
        case '/':
            return divide(a,b)
            break;
        default:
            alert('An error has occurred')
    }
}

function executeOperation() {
    display.textContent = ''
    display.textContent = operate(operator, operand1, operand2)
    operand1 = Number(display.textContent)
}

equalsBtn.addEventListener('click', executeOperation)