const display = document.querySelector('#display')

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

function operate(op, a, b) {
    return op(a , b)
}

function addDecimal() {
    if(display.textContent.includes('.')) return
    display.innerText += '.'
}

