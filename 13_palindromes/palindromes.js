const palindromes = function (input) {
    const stripped = (input.replace(/[^a-zA-Z0-9]/g, '')).toLowerCase();

    for (let i = 0; i < stripped.length / 2; i++) {
        if (stripped[i] !== stripped[stripped.length - 1 - i]) return false;
    }

    return true;


};

// Do not edit below this line
module.exports = palindromes;
