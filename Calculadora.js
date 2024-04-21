let displayValue = '';

function Calculadora(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function Igual() {
    try {
        displayValue = eval(displayValue).toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function Limpiar() {
    displayValue = '';
    document.getElementById('display').value = '';
}