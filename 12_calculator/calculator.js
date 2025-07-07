const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(a) {
  let sum = 0;
  for (const i of a) {
    sum += i;
  }
	return sum;
};

const multiply = function(a) {
  let result = 1;
  for (const i of a) {
    result *= i;
  }
  return result;
};

const power = function(a, b) {
  return a ** b;
	
};

const factorial = function(a) {
  result = 1;
  for (let i = 1; i <= a; i++) {
    result = result * i;
  }
  return result;
	
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
