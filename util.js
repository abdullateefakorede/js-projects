function isNanFunction(firstValue, secondValue) {
    if (isNaN(firstValue)) {
        console.log('Invalid First value!')
        return true;
    }
    if (isNaN(secondValue)) {
        console.log('Invalid Second value!')
        return true;
    }
}

function zeroDivisor(secondValue) {
    if (secondValue === 0) {
        console.log(`I can't divide by Zero!'`)
        return true;
    }
}

function isNanOneValueFunction(value) {
    if (isNaN(value)) {
        console.log('Invalid value!')
        return true;
    }
}


exports.isNanFunction = isNanFunction;
exports.isNanOneValueFunction = isNanOneValueFunction;
exports.zeroDivisor = zeroDivisor;