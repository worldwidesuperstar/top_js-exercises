const getTheTitles = function(books) {
    result = [];
    for (const book of books) {
        result.push(book.title);
    }
    return result;

};

// Do not edit below this line
module.exports = getTheTitles;
