let display = document.getElementById('display');
let expression = '';

function append(value) {
    expression += value;
    display.value = expression;
}

function clearDisplay() {
    expression = '';
    display.value = '';
}

function calculate() {
    try {
        let result = eval(expression);
        display.value = result;
        expression = result.toString();
    } catch (error) {
        display.value = 'Error';
        expression = '';
    }
}
