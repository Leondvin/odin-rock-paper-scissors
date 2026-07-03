const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;
  
  const getHumanChoice = () => {
    const humanChoiceRaw = prompt("Enter your choice", "rock");
    const humanChoice = humanChoiceRaw.toLowerCase();
    return humanChoice;
  };
  const getComputerChoice = () => {
    const choicesArr = ["rock", "paper", "scissors"];
    const randomIndex = getRandomNum(choicesArr.length);
    const computerChoice = choicesArr[randomIndex];
    return computerChoice;
  };
  const getRandomNum = (max) => {
    const randomNum = Math.floor(Math.random() * max);
    return randomNum;
  };
  const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
      console.log("It's a draw!");
    } else if (humanChoice === "rock" &&  computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`Computer wins! ${computerChoice} beats ${humanChoice}`);
    }
  };
};
