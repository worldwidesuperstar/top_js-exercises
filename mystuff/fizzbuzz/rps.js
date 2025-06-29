function rps(input) {
    const options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);

    let choice = options[random];
    let text = "The all seeing computer has chosen " + choice + ".<br>";

    console.log(choice);

    if (input == choice) {
        text += "Its a tie lol"
    } else {
        switch(input) {
            case "rock":
                if (choice == 'paper') {
                    text += "You lostt noo"
                } else { 
                    text += "VICTORY!!!";
                }

                break;
            case "paper":
                if (choice == 'scissors') {
                    text += "You lostt noo"
                } else { 
                    text += "VICTORY!!!";
                }
                
                break;
            case "scissors":
                if (choice == 'rock') {
                    text += "You lostt noo"
                } else { 
                    text += "VICTORY!!!";
                }
                
                break;
        }
    }
    return text;
}

document.getElementById("pick-rock").addEventListener('click', function() {
    const output = document.getElementById('output');
    output.innerHTML = rps("rock");

})

document.getElementById("pick-paper").addEventListener('click', function() {
    const output = document.getElementById('output');
    output.innerHTML = rps("paper");

})

document.getElementById("pick-scissors").addEventListener('click', function() {
    const output = document.getElementById('output');
    output.innerHTML = rps("scissors");

});
    