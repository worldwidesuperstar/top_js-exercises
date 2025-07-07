let pscore = 0;
let oscore = 0;

const player_score =  document.getElementById("player_score");
player_score.textContent = pscore;
const opp_score =  document.getElementById("opp_score");
opp_score.textContent = oscore;

function rps(input) {
    const options = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);

    let choice = options[random];
    let text = "The all seeing computer has chosen " + choice + ".<br>";

    console.log(choice);

    let win = false;

    if (input == choice) {
        text += "Its a tie lol"
    } else {
        switch(input) {
            case "rock":
                if (choice == 'paper') {
                    text += "You lostt noo"
                } else { 
                    text += "VICTORY!!!";
                    win = true;
                }

                break;
            case "paper":
                if (choice == 'scissors') {
                    text += "You lostt noo"
                } else { 
                    text += "VICTORY!!!";
                    win = true;
                }
                
                break;
            case "scissors":
                if (choice == 'rock') {
                    text += "You lostt noo"
                } else { 
                    text += "VICTORY!!!";
                    win = true;
                }
                
                break;
        }
    }
    const output = document.getElementById('output');
    output.innerHTML = text;

    return win;
}

document.getElementById("pick-rock").addEventListener('click', () => {
    if (rps("rock") == true) {
        pscore++;
    } else {
        oscore++;
    }
    player_score.textContent = pscore;
    opp_score.textContent = oscore;
})

document.getElementById("pick-paper").addEventListener('click', () => {
    if (rps("paper") == true) {
        pscore++;
    } else {
        oscore++;
    }
    player_score.textContent = pscore;
    opp_score.textContent = oscore;
})

document.getElementById("pick-scissors").addEventListener('click', () => {
    if (rps("scissors") == true) {
        pscore++;
    } else {
        oscore++;
    }
    player_score.textContent = pscore;
    opp_score.textContent = oscore;
});

document.getElementById("reset-score").addEventListener('click', () => {
    pscore = 0;
    oscore = 0;
    player_score.textContent = pscore;
    opp_score.textContent = oscore;

    const output = document.getElementById('output');
    output.innerHTML = "";
});

