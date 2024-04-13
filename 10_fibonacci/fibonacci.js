const fibonacci = function(position) {
if(position < 0) return "OOPS";
if(position == 1 || position == 2) return 1;

let fibonacci = [1, 1];
let secondToLastNumber = 1;
let lastNumber = 1;

for(let i = 3; i <= position; i++) {
    currentNumber = secondToLastNumber + lastNumber;
    fibonacci.push(currentNumber);

    secondToLastNumber = lastNumber;
    lastNumber = currentNumber;
};

return fibonacci[position -1];
};

// Do not edit below this line
module.exports = fibonacci;
