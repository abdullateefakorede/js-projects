const { isNanFunction, isNanOneValueFunction } = require('./util.js')

Array.prototype.sum = function() {
    return this.reduce((x, y) => x + y, 0)
}

Array.prototype.allNumbers = function() {
    return this.every(x => !isNaN(x))
}

Array.prototype.average = function() {
    return (this.sum() / (this.length))
}

function factorial(a) {

    if (a === 0) {
        return 0;
    }

    if (a < 0) {
        return 'Input a postive number!';
    }

    let result = 1;

    for (let i = 1; i <= a; i++) {
        result *= i;
    }
    return result;
}

function modulus(value, secondValue) {
    console.log(value % secondValue)
}

const action = process.argv[2];
let value = process.argv[3];
let secondValue = process.argv[4];
const argArray = [];

if (!action) {
    console.log('Which operation should I perform? Abeg Tell me what to do!')
    return;
}

if (!value) {
    console.log('What should I work On? I need input!')
    return;
}

const argvLength = process.argv.length;
for (let i = 3; i < argvLength; i++) {
    argArray.push(Number(process.argv[i]))
}

value = Number(value);
secondValue = Number(secondValue);

switch (action) {
    case 'sum':
        if (argArray.allNumbers()) {
            console.log(argArray.sum())
            return;
        }
        console.log('Your input contain non-numbers')
        break;

    case 'average':
        if (argArray.allNumbers()) {
            console.log(argArray.average())
            return;
        }
        console.log('Your input contain non-numbers')
        break;

    case 'modulus':
        if (!isNanFunction(value, secondValue)) {
            modulus(value, secondValue)
            return;
        }
        console.log('Your input contain non-numbers')
        break;

    case 'factorial':
        if (!isNanOneValueFunction(value)) {
            console.log(factorial(value));
        }
        break;

    default:
        console.log('Invalid Operation');
        break;

}