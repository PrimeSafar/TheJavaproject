function getComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3)
    switch(randomNumber){
        case 0:
            return "rock"
            break;
        case 1:
            return "paper"
            break;
        case 2:
            return "scissors"
            break;
    
}}



let humanScore =0
let computerScore =0

function playRound(humanChoice)
{
   
    let computerChoice = getComputerChoice();
    let resultMessage = '';
    let resetMassage = ''
            if(humanChoice === "rock" && computerChoice === "rock")
        {
            resultMessage = "It's a tie!";
            document.getElementById('result').style.color ="black"

                }
        else if(humanChoice === "rock" && computerChoice === "scissors")
            {
            humanScore++
            resultMessage = "You win!";
            document.getElementById('result').style.color ="green"
            }
        else if(humanChoice === "rock" && computerChoice === "paper")
            {
            computerScore++
            resultMessage = "Computer wins!";
            document.getElementById('result').style.color ="red"

            }
        else if(humanChoice === "paper" && computerChoice === "rock")
            {
            humanScore++
            resultMessage = "You win!";
            document.getElementById('result').style.color ="green"

            }
        else if(humanChoice === "paper" && computerChoice === "scissors")
            {
            computerScore++
            resultMessage = "Computer wins!";
            document.getElementById('result').style.color ="red"

            }
        else if(humanChoice === "paper" && computerChoice === "paper")
            {
                resultMessage = "It's a tie!";
                document.getElementById('result').style.color ="black"

            }
        else if(humanChoice === "scissors" && computerChoice === "rock")
            {
            computerScore++
            resultMessage = "Computer wins!";
            document.getElementById('result').style.color ="red"

            }
        else if(humanChoice === "scissors" && computerChoice === "paper")
            {
            humanScore++
            resultMessage = "You win!";
            document.getElementById('result').style.color ="green"

            }
        else if(humanChoice === "scissors" && computerChoice === "scissors")
            {
                resultMessage = "It's a tie!";
                document.getElementById('result').style.color ="black"

            }
        else
        {
            console.log("Invalid choice. Please enter rock, paper, or scissors.")
            
        }
        if (humanScore === 5) {
            document.getElementById('score').innerText = `Human: ${humanScore}`
            document.getElementById('result').innerText = 'YOU WIN!';
            return;
        } else if (computerScore === 5) {
            document.getElementById('score').innerText = `Computer : ${computerScore}`
            document.getElementById('result').innerText = 'YOU LOSE!';
            return;
        }
        else if(humanScore&&computerScore === 5)
        {
            document.getElementById('result').innerText = 'Its Tie !';
            return;

        }
        document.getElementById('score').innerText = `Human: ${humanScore} - Computer: ${computerScore}`;
        document.getElementById('computerChoice').innerText = `Computer Choice: ${computerChoice}`;
        document.getElementById('HumanChoice').innerText = `Human Choice: ${humanChoice}`;

document.getElementById('result').innerText ='Result Is: ' + resultMessage 
document.getElementById('score').innerText = `Human: ${humanScore} 
 Computer: ${computerScore}`;
}
function resetGame()
{
    humanScore = 0;
    computerScore = 0;
    document.getElementById('result').innerText = "Reset Game !  ";  // Reset the result message to empty string.
    document.getElementById('score').innerText = "Human: 0 - Computer: 0";
    document.getElementById('computerChoice').innerText = "Computer Choice: ";
    document.getElementById('HumanChoice').innerText = "Human Choice: ";
}
