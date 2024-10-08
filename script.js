let player1 = document.querySelector('.player1');
let player2 = document.querySelector('.player2');
let resultDisplay = document.querySelector('.result-display');
let play = document.querySelector('.reset');

window.onload = () => {
    resultDisplay.innerText = 'Click "Play"';
}

play.addEventListener('click', () => {
    let possibilities = ['stone', 'paper', 'scissors'];
    let rand1 = Math.round(Math.random()*2);
    let rand2 = Math.round(Math.random()*2);

    player1.innerHTML = `<img src="images/${possibilities[rand1]}.jpeg">`;
    player2.innerHTML = `<img src="images/${possibilities[rand2]}.jpeg">`;

    let winPattern = {
        'stone': 'scissors',
        'scissors': 'paper',
        'paper': 'stone'
    };

    if(possibilities[rand1] === possibilities[rand2]){
        resultDisplay.innerText = 'Draw';
    }

    else if(winPattern[possibilities[rand1]] === possibilities[rand2]){
        resultDisplay.innerText = 'Player 1 wins';
    }
    else{
        resultDisplay.innerText = 'Player 2 wins';
    }
});