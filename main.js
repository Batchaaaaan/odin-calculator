function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}


function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}


function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}


function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}


function operate(operator, firstOperand, secondOperand) {
    if (operator === 'add') {
        return add(firstOperand, secondOperand);
    } else if (operator === 'subtract') {
        return subtract(firstOperand, secondOperand);
    } else if (operator === 'multiply') {
        return multiply(firstOperand, secondOperand);
    } else if (operator === 'divide') {
        return divide(firstOperand, secondOperand);
    }
}