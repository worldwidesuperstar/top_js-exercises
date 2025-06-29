const repeatString = function(input, count) {
    if (count < 0) {
        return "ERROR"
    }
    
    result = "";

    for (let i = 0; i < count; i++) {
        result += input;
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
