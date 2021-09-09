const { isNanFunction, zeroDivisor } = require('./util.js')

function add(a, b) {
    if (a === -0 && b === -0) {
        return 0;
    }
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    if (a === 0 || b === 0) {
        return 0;
    }
    return a * b
}

function divide(a, b) {
    return a / b
}

const action = process.argv[2];
let firstValue = process.argv[3];
let secondValue = process.argv[4];

if (!action) {
    console.log('Which operation should I perform? Abeg Tell me what to do!')
    return;
}

if (!firstValue) {
    console.log('What should I work On? I need inputs!')
    return;
}

if (!secondValue) {
    console.log('Second Value is missing!')
    return;
}


firstValue = Number(firstValue);
secondValue = Number(secondValue);


switch (action) {
    case 'add':
        if (!isNanFunction(firstValue, secondValue)) {
            console.log(add(firstValue, secondValue));

        }
        break;

    case 'subtract':
        if (!isNanFunction(firstValue, secondValue)) {
            console.log(subtract(firstValue, secondValue));
        }
        break;

    case 'multiply':
        if (!isNanFunction(firstValue, secondValue)) {
            console.log(multiply(firstValue, secondValue));
        }
        break;

    case 'divide':
        if (!isNanFunction(firstValue, secondValue)) {
            if (!zeroDivisor(secondValue)) {
                console.log(divide(firstValue, secondValue));
            }
        }
        break;

    default:
        console.log('Invalid Operation');
        break;

}

exports.divide = divide;
exports.add = add;