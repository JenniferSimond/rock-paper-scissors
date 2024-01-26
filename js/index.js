const handOptions = {   
    'rock': '/assets/Rock.png',
    'paper': 'assets/Paper.png',
    'scissors': 'assets/Scissors.png'
}

let SCORE = 0;

const pickUserHand = (hand) => {    
    console.log("User Hand: ", hand);
    //hide the selection page
    let hands = document.querySelector('.hands');
    // This hides hands
    hands.style.display = 'none';
//   show the next page (game outcocme page)

    let game = document.querySelector('.game')
    game.style.display = 'flex';

    document.getElementById('userSelection').src = handOptions[hand];

    let cpHand = pickComputerHand();
    outcomeArea(hand, cpHand)
}

const pickComputerHand = () => {  
    let hands = document = ['rock', 'paper', 'scissors']
    let cpHand = hands[Math.floor(Math.random() * 3)]

    console.log("House Hand:", cpHand)
    // Sets the computer pick
    document.getElementById('computerSelection').src = handOptions[cpHand];

    return cpHand;
}

const outcomeArea = (hand, cpHand) => { 
    if (hand == cpHand) {
         setGameOutcome("Game Tied!!!");
    } else if (hand == "rock" && cpHand == "scissors") {
        setGameOutcome("You Won!");
        setScore(SCORE +1);
    } else if (hand == "paper" && cpHand == "rock") {
        setGameOutcome("You Won!");
        setScore(SCORE +1);
    } else if (hand == "scissors" && cpHand == "paper") {
        setGameOutcome("You Won!");
        setScore(SCORE +1);
    } else {
        setGameOutcome("You Lost!");
    }
}

const restartGame = () => { 
    let hands = document.querySelector('.hands');
    hands.style.display = 'flex';

    let game = document.querySelector('.game')
    game.style.display = 'none';

}

const setGameOutcome = (gameOutcome) => {    
    document.querySelector('.gameOutcome h2').innerText = gameOutcome;
}

const setScore = (score) => {   
    SCORE = score;
    document.querySelector('.SCORE h2').innerText = SCORE;
}




