var computerScore = 0,
    playerScore = 0,
    computerHand = ["rock", "paper", "scissor"],
    playerHandSelector = document.getElementById("player-hand"),
    computerScoreHolder = document.querySelectorAll("#comp-score span")[0],
    playerScoreHolder = document.querySelectorAll("#player-score span")[0],
    computerHandPlaceHolder = document.getElementById("computer-hand"),
    turnResult = document.getElementById("turn-result");


function randomInteger(min, max){
  return Math.floor( Math.random() * (max - min + 1) + min)
}

function playTurn(event) {
     var turnResultContent,
	 computerChoice = computerHand[randomInteger(0,2)],
	 playerChoice = event.target.classList[0];
	 computerHandPlaceHolder.setAttribute("class", "");
	 computerHandPlaceHolder.classList.add(computerChoice)
	 computerHandPlaceHolder.textContent = computerChoice;

	if( computerChoice === playerChoice ) {
	    turnResult.textContent = "It\s a tie!";
	}

	else if (
	  (computerChoice === "rock" && playerChoice === "scissor") || (computerChoice === "paper" && playerChoice === "rock") || (computerChoice === "scissor" && playerChoice === "paper")) {
	   computerScore++;
	   turnResult.textContent = "Computer wins!";
	   computerScoreHolder.textContent = computerScore;

	}

	else {
           playerScore++;
	   turnResult.textContent = "You win!";
	   playerScoreHolder.textContent = playerScore;
	}
}

playerHandSelector.addEventListener(
    "click",
     playTurn,
     false
);
