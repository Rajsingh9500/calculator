const resultInput = document.getElementById('result');
let currentExpression = ''; 


function appendValue(value) {
    currentExpression += value;
    resultInput.value = currentExpression;
}

// Clear the display
function clearDisplay() {
    currentExpression = '';
    resultInput.value = '';
}

function deleteLast() {
    currentExpression = currentExpression.slice(0, -1);
    resultInput.value = currentExpression;
}

function calculateResult() {
    try {
        const result = eval(currentExpression); 
        currentExpression = `${result}`; 
        resultInput.value = currentExpression; 
    } catch (error) {
        resultInput.value = 'Error';
        currentExpression = '';
    }
}
