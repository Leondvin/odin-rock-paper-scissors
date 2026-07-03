const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;
  
  const getHumanChoice = () => {
    const humanChoiceRaw = prompt("Enter your choice", "rock");
    const humanChoice = humanChoiceRaw.toLowerCase();
    return humanChoice;
  };
};
