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
	//if num is 5
  let arr = [];

  if(num === 0) {
    arr.push(1);
  } else {
    for(let i = num; i > 0; i--) {
      arr.push(i);
    }
  }

  return arr.reduce((total, currentItem) => {
    return total * currentItem;
  }, 1);
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
