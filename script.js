var output = document.getElementById("output");
var numbers = document.querySelectorAll('#number');
var clear = document.getElementById("clear");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var del = document.getElementById("delete");
var subtract = document.getElementById("subtract");
var add = document.getElementById("add");
var equals = document.getElementById('equal');
var remainder = document.getElementById('remainder');
var decimal = document.getElementById('decimal');
var justEvaluated;

const clickSound = new Audio("Assets/clicksound.wav");
const operatorClickSound = new Audio('Assets/clicksoundoperator.wav');
// Operator Class
const operatorDictionary = {
    'divide' : {'operator': '/'},
    'multiply' : {'operator': "*"},
    'subtract' : {'operator' : '-'},
    'add' : {'operator' : '+'},
    'remainder' : {'operator' : '%'},
    'decimal' : {'operator' : '.'}
}

// Operator Functions
for (const operatorName in operatorDictionary) {
    const operatorButton = document.getElementById(operatorName);

    operatorButton.addEventListener('click', () => {
        operatorClickSound.play();
        const operatorValue = operatorDictionary[operatorName].operator;
        const outputLastCharacter = output.innerHTML.slice(-1);
        const operatorList = ['/', '+', '-', '*', '%', '.']
        if (outputLastCharacter != operatorValue && !operatorList.includes(outputLastCharacter)) {

            output.innerHTML += operatorValue;
            
        }
    })
}

// Clearing Functions
clear.addEventListener('click', () => {operatorClickSound.play();output.innerHTML = '';});
del.addEventListener('click', () => {
    operatorClickSound.play();
    output.innerHTML = output.innerHTML.slice(0, -1);
})

// Evaluation 
equals.addEventListener('click', () => {
    operatorClickSound.play();
    try {
        let calculation = eval(output.innerHTML);
        output.innerHTML = Number(calculation).toLocaleString();
    } catch { output.innerHTML = "System Error" }
    justEvaluated = true;
})

numbers.forEach(button => {
    button.addEventListener('click', () => {
        clickSound.play();
        if (justEvaluated) {output.innerHTML = button.innerHTML; justEvaluated = false;}
        else {output.innerHTML += button.innerHTML}
    })
})