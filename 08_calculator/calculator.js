const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, currentItem) => total + currentItem, 0);
};

const multiply = function(arr) {
 return arr.reduce((total, currentItem) => total * currentItem, 1);
};

const power = function(num, power) {
  return Math.pow(num, power);
};

const factorial = function(num) {
	if(num === 0) return 1;
  let product = 1;
  for(let i = num; i > 0; i--) {
      product *= i;
    };
    return product;
  };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
