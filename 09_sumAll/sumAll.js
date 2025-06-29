const sumAll = function(num1, num2) {

    if ((typeof num1 != "number") || (typeof num2 != "number")) return "ERROR";
    if ((Number.isInteger(num1) && Number.isInteger(num2)) == false) 
        return "ERROR";
    if ((num1 < 0) || (num2 < 0)) return "ERROR";

    let bigger = num2;
    let smaller = num1;

    if (num1 >= num2) {
        bigger = num1;
        smaller = num2;
    }

    sum = 0;

    for (let i = smaller; i <= bigger; i++) {
        sum += i
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
