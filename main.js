// main.js - Calculator logic

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

function calculate() {
    const display = document.getElementById('display');
    try {
        // Simple validation: only allow numbers, operators, decimals
        if (/^[\d+\-*/.]+$/.test(display.value)) {
            display.value = eval(display.value);
        } else {
            display.value = 'Error';
        }
    } catch (err) {
        display.value = 'Error';
    }
}
