const removeFromArray = function(input, ...removals) {
    result = input;
    for (let i = 0; i < removals.length; i++) {
        result = result.filter(item => item !== removals[i]);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
