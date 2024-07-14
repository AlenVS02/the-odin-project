const possibleMoves = {
    1: 'rock',
    2: 'paper',
    3: 'scissors'
};

let scores = {
    'Human': 0,
    'Computer': 0
}

function firstCapital(word) {
    return word[0].toUpperCase() + word.slice(1).toLowerCase()
}

function getComputerChoice() {
    let npcMove = Math.floor((Math.random() * 3) + 1);

    return possibleMoves[npcMove];
}

function getHumanChoice() {
    let humanMove = prompt('What move would you like to play? ');

    while (!(Object.values(possibleMoves)).includes(humanMove.toLowerCase())) {
        humanMove =  prompt('Please pick a valid move. ')
    }

    return humanMove;
}

function playRound() {
    const humanMove = getHumanChoice();
    const compMove = getComputerChoice();

    if (
        (humanMove === possibleMoves[1] && compMove === possibleMoves[3]) ||
        (humanMove === possibleMoves[2] && compMove === possibleMoves[1]) ||
        (humanMove === possibleMoves[3] && compMove === possibleMoves[2])
    ) {
        scores.Human++
        alert(`Human: ${scores.Human} || Computer: ${scores.Computer}\nYou win! ${firstCapital(humanMove)} beats ${firstCapital(compMove)}.`)
    } else if (humanMove === compMove) {
        alert(`Human: ${scores.Human} || Computer: ${scores.Computer}\nIt's a tie!`)
    } else {
        scores.Computer++
        alert(`Human: ${scores.Human} || Computer: ${scores.Computer}\nYou lose! ${firstCapital(compMove)} beats ${firstCapital(humanMove)}.`)
    }
}

for (let i = 0; i < 5; i++) {
    playRound()
}

if (scores.Computer > scores.Human) {
    alert(`====||FINAL SCORE||====\nHuman: ${scores.Human} || Computer: ${scores.Computer}\nYou lose! Try again next time.`)
} else if (scores.Human > scores.Computer){
    alert(`====||FINAL SCORE||====\nHuman: ${scores.Human} || Computer: ${scores.Computer}\nYou win! Congratulations!`)
} else {
    alert(`====||FINAL SCORE||====\nHuman: ${scores.Human} || Computer: ${scores.Computer}\nIt's a tie!`)
}
