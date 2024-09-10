function getRandomNumberOfPlayers(){
    return Math.floor(Math.random() * 7) + 2;
}

function getRandomChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function determineWinner(choice1, choice2){
   if(choice1 === choice2){
    return "It's a tie!"
   } else if (
    (choice1 === 'rock' && choice2 === 'scissors') ||
    (choice1 === 'scissors' && choice2 === 'paper') ||
    (choice1 === 'paper' && choice2 === 'rock')
   ) {
    return 'Player 1';
   } else {
    return 'Player 2';
   }
}


function playTournament(){
    const numberOfPlayers = getRandomNumberOfPlayers();
    console.log(`Number of players: ${numberOfPlayers}`);
    const scores = Array(numberOfPlayers).fill(0);

    for (let i = 0; i < numberOfPlayers - 1; i++){
        for(let j = i + 1; j < numberOfPlayers; j++){
            const choice1 = getRandomChoice();
            const choice2 = getRandomChoice();
            console.log(`Player ${i+1} (${choice1}) vs Player ${j+1} (${choice2})`);

            const winner = determineWinner(choice1, choice2);
            if(winner === "Player 1"){
                scores[i]++;
                console.log(`Winner: Player ${i+1}`);
            } else if (winner === "Player 2"){
                scores[j]++;
                console.log(`Winner: Player ${j+1}`);
            } else {
                console.log("It's a tie!");
            }
        }
    } 

    const maxScore = Math.max(...scores);
    const winnerIndex = scores.indexOf(maxScore)+1;
    console.log(`The tournament winner is the Player ${winnerIndex} with a score of ${maxScore} victories!!`);
}

playTournament();