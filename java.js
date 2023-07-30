document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    var number1 = parseFloat(document.getElementById('number1').value);
    var number2 = parseFloat(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    
    // Perform operation
    var result;
    if (operation === 'add') {
        result = number1 + number2;
    } else if (operation === 'subtract') {
        result = number1 - number2;
    } else if (operation === 'multiply') {
        result = number1 * number2;
    } else if (operation === 'divide') {
        result = number1 / number2;
    }

    // Display result
    document.getElementById('result').innerText = 'Hasil: ' + result;
});
