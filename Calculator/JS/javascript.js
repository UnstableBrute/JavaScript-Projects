//creates an object to keep track of values
const Calculator = {
    //this will display 0 on the calculator screen
    displayValue: "0",
    //this will hold the first operand for any expressions we set it to null for now
    firstOperand: null,
    //this checks whether or not the second operand had been inputted by the user
    waitSecondOperand: false,
    //this will hold operator, we set it to null for now
    operator: null,
};

//this modifies values each time a button is clicked on
function inputDigit(digit) {
    const { displayValue, waitSecondOperand } = Calculator;
    //this checks if the waitSecondOperand is try and sets displayValue to the key that was clicked on
    if (waitSecondOperand === true) {
        Calculator.displayValue = digit;
        Calculator.waitSecondOperand = false;
    } else {
        //this overwrites diplayValue if the current value is 0, otherwise it adds onto it
        Calculator.displayValue = displayValue === "0" ? digit : displayValue + digit;
    }
}

//this section handles decimal points
function inputDecimal(dot) {
    //this ensures that accidental clicking of the decimal point doesn't casue bugs in the operation
    if (Calculator.waitSecondOperand === true) return;
    if (!Calculator.displayValue.includes(dot)) {
        //we are saying that if the displayValue does not contain a decimal point we want to add a decimal point
        Calculator.displayValue += dot;
    }
}

//this section hadles operators
function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = Calculator;
    //when an operator key is pressed we convert the current number displayed on the screen to a number and then store the result in Calculator.firstOperand if it doesn't already exist
    const valueOfInput = parseFloat(displayValue);
    //checks if an operator already exists and if waitSecondOperand is true, then updates the operator and exits form the function
    if (operator && Calculator.waitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;
    }
    //checks if an operator already exists
    else if (operator) {
        const valueNow = firstOperand || 0;
        //if operator exists, property loopup is performed for the operator in the performCalculation object and the function that matches the operator is exexcuted
        let result = performCalculation[operator](valueNow, valueOfInput);
        //logs to keep track of whats going on and to help bug fix
        console.log(valueNow);
        console.log(operator);
        console.log(valueOfInput);
        //here we add a fuxed amount of numbers after the decimal
        result = Number(result).toFixed(9);
        //this will remove any trailing 0's
        result = (result * 1).toString();
        Calculator.displayValue = parseFloat(result);
        Calculator.firstOperand = parseFloat(result);
        //logs to keep track of whats going on and to help bug fix
        console.log(nextOperator);
        console.log(result);
    }
    Calculator.waitSecondOperand = true;
    Calculator.operator = nextOperator;
}

const performCalculation = {
    "/": (firstOperand, secondOperand) => firstOperand / secondOperand,
    "*": (firstOperand, secondOperand) => firstOperand * secondOperand,
    "+": (firstOperand, secondOperand) => firstOperand + secondOperand,
    "-": (firstOperand, secondOperand) => firstOperand - secondOperand,
    "=": (firstOperand, secondOperand) => secondOperand
};
function calculatorReset() {
    console.log("AC function called");
    Calculator.displayValue = "0";
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = false;
    Calculator.operator = null;
}
//this function updates the calculator screen with the contents of displayValue
function updateDisplay() {
    //makes use of the calculatorScreen class to target the input tag in the HTML document
    const display = document.querySelector(".calculatorScreen");
    display.value = Calculator.displayValue;
}

updateDisplay();
//this section monitors button clicks
const keys = document.querySelector(".calculatorKeys");
keys.addEventListener("click", (event) => {
    //the target variable is an object that represents the element that was clicked
    const { target } = event;
    //if the element that was clicked on is not a button, exit the element taht was clicked
    if (!target.matches("button")) {
        return;
    }
    if (target.classList.contains("operator")) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }
    if (target.classList.contains("decimal")) {
        console.log("decimal inputed successfully")
        inputDecimal(target.value);
        updateDisplay();
        return;
    }
    //ensures that AC clear all input from the Calculator screen
    if (target.classList.contains("allClear")) {
        calculatorReset();
        updateDisplay();
        return;
    }
    inputDigit(target.value);
    updateDisplay();
})