const displayYourChoice = document.getElementById('yourC')
const displayComputerChoice = document.getElementById('computerC')
const displavVictory = document.getElementById("wins")
const displayLose = document.getElementById('loses')
const buttons = document.querySelectorAll('button')
let userChoice
let computerChoice
let victory = 0
let lose = 0

displavVictory.innerHTML = victory
displayLose.innerHTML = lose

buttons.forEach(buttons => buttons.addEventListener('click', (e) => {
    userChoice = e.target.id
    displayYourChoice.innerHTML = userChoice
    setComputerChoice()
    setResult()
}))

function setComputerChoice () {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1 ) {
        computerChoice = "rock"
    }

    if (randomNumber === 2 ) {
        computerChoice = "paper"
    }

    if (randomNumber === 1 ) {
        computerChoice = "scissors"
    }

    displayComputerChoice.innerHTML = computerChoice

}

function setResult () {

    if (userChoice === computerChoice) {

        alert("Its a draw!");

    }

    if (userChoice === "rock" && computerChoice === "scissors") {
        alert("Rock beat scissors, you win");
        victory  = victory + 1
        displavVictory.innerHTML = victory        
    }

    if (userChoice === "paper" && computerChoice === "rock") {
        alert("Paper beat Rock, you win");
        victory  = victory + 1
        displavVictory.innerHTML = victory        
    }

    if (userChoice === "scissors" && computerChoice === "paper") {
        alert("Scissors beat Paper, you win");
        victory  = victory + 1
        displavVictory.innerHTML = victory        
    }

    if (userChoice === "rock" && computerChoice === "paper") {
        alert("Paper beats rock, you lose")
        lose = lose + 1 
        displayLose.innerHTML = lose
    }

    if (userChoice === "scissors" && computerChoice === "rock") {
        alert("Rock beats scissors, you lose")
        lose = lose + 1 
        displayLose.innerHTML = lose
    }

    if (userChoice === "paper" && computerChoice === "scissors") {
        alert("Scissors beats Paper, you lose")
        lose = lose + 1 
        displayLose.innerHTML = lose
    }
    
}

