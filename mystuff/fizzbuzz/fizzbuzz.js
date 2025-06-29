function fizzbuzz(range) {
    let text = "";

    for (let i = 1; i <= range; i++) {

        if ( (i % 15 === 0) ) {
            text += "fizzbuzz" + "<br>";
        } else if (i % 3 === 0) {
            text += "fizz" + "<br>";
        } else if (i % 5 === 0) {
            text += "buzz" + "<br>";
        } else
            text += i + "<br>";

    }

    return text;
}

document.getElementById("run-fizzbuzz").addEventListener('click', function() {
    const input = document.getElementById('input-range').value;
    const output = document.getElementById('output');
    const range = parseInt(input, 10);

    output.innerHTML = fizzbuzz(range);

});
    