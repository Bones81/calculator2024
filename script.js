// SET SELECTORS AND BUTTON REFERENCES
const display = document.querySelector('#display')
const btn1 = document.querySelector('1-btn')
const btn2 = document.querySelector('2-btn')
const btn3 = document.querySelector('3-btn')
const btn4 = document.querySelector('4-btn')
const btn5 = document.querySelector('5-btn')
const btn6 = document.querySelector('6-btn')
const btn7 = document.querySelector('7-btn')
const btn8 = document.querySelector('8-btn')
const btn9 = document.querySelector('9-btn')
const btn0 = document.querySelector('0-btn')
const plusMinusBtn = document.querySelector('plus-minus-btn')
const decimalBtn = document.querySelector('decimal-btn')
const allClearBtn = document.querySelector('all-clear-btn')
const clearBtn = document.querySelector('clear-btn')
const addBtn = document.querySelector('add-btn')
const subtractBtn = document.querySelector('subtract-btn')
const multiplyBtn = document.querySelector('multiply-btn')
const divideBtn = document.querySelector('divide-btn')
const equalsBtn = document.querySelector('equals-btn')

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
    return b / a
}

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

// SET DECIMAL LOGIC
function addDecimal() {
    if(display.textContent.includes('.')) return
    display.innerText += '.'
}

const buttons = document.querySelectorAll('.buttons')

