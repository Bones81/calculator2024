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

const numberBtns = document.querySelectorAll('.number')
numberBtns.forEach( (btn) => {
    btn.addEventListener('click', (e) => clickNumber(e))
})

decimalBtn.addEventListener('click', (e) => clickNumber(e))

function clickNumber(event) {
    if(display.textContent.length < 10) {
        display.textContent += event.target.textContent
    }
}

function clickClear() {
    display.innerText = ''
}

clearBtn.addEventListener('click', clickClear)

function togglePositiveNegative() {
    if (display.textContent.includes('-')) {
        display.textContent = display.textContent.slice(1)
    } else {
        display.textContent = '-' + display.textContent
    }
}

plusMinusBtn.addEventListener('click', togglePositiveNegative)
