const resultInput = document.getElementById('result');
let currentExpression = ''; // Store the current calculation expression

// Append values to the display
function appendValue(value) {
    currentExpression += value;
    resultInput.value = currentExpression;
}

// Clear the display
function clearDisplay() {
    currentExpression = '';
    resultInput.value = '';
}

// Delete the last character
function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    resultInput.value = currentExpression;
}

// Calculate the result and display it
function calculateResult() {
    try {
        const result = eval(currentExpression); // Calculate the result
        currentExpression = `${result}`; // Update expression with result
        resultInput.value = currentExpression; // Display result
    } catch (error) {
        resultInput.value = 'Error';
        currentExpression = ''; // Reset expression on error
    }
}
