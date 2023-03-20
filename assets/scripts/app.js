const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function getUserNumber() {
    return parseInt(userInput.value);
}

function createAndWriteOutPut(operator, resultBefore, calcNumber) {
    const calcDescription = `${resultBefore} ${operator} ${calcNumber}`;
    outputResult(currentResult, calcDescription);
}

function writeToLog(
    operationIdentifier,
    previousResult,
    operationNumber,
    newResult
) {
    const logEntry = {
        operation: operationIdentifier,
        previousResult: previousResult,
        number: operationNumber,
        result: newResult
    }
    logEntries.push(logEntry);
    console.log(logEntries);
}

function calculateResult(calculationType) {
    const enteredNumber = getUserNumber();
    if (
        calculationType !== 'Add' &&
        calculationType !== 'Subtract' &&
        calculationType !== 'Multiply' &&
        calculationType !== 'Divide' ||
        // negation that checks if entered number is 0, meaning false (falsy value)
        !enteredNumber
    ) {
        return;
    }

    const initialResult = currentResult;
    let mathOperator;
    if (calculationType === 'Add') {
        currentResult += enteredNumber;
        mathOperator = '+';
    }
    else if (calculationType === 'Subtract') {
        currentResult -= enteredNumber;
        mathOperator = '-';
    }
    else if (calculationType === 'Multiply') {
        currentResult *= enteredNumber;
        mathOperator = '*';
    }
    else if (calculationType === 'Divide') {
        currentResult /= enteredNumber;
        mathOperator = '/';
    }
    
    createAndWriteOutPut(mathOperator, initialResult, enteredNumber);
    writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
    calculateResult('Add');    
}

function subtract() {
    calculateResult('Subtract');
}

function multiply() {
    calculateResult('Multiply');
}

function divide() {
    calculateResult('Divide');   
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);


