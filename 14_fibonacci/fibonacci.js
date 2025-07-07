const fibonacci = function(input) {

    let num = 0;

    if (typeof input != Number) {
        num = parseInt(input);
    } else {
        num = input;
    }

    if (num < 0)  return "OOPS";
    if (num == 0) return 0;

    let a = 0;
    let b = 1;

    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;

};

// Do not edit below this line
module.exports = fibonacci;
