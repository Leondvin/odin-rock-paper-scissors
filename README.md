# The Odin Project - Rock Paper Scissors

The Rock Paper Scissors project from [The Odin Project](https://www.theodinproject.com/lessons/foundations-rock-paper-scissors).

## Pseudocode

```js
// FUNCTION playGame()
//
//   SET computerScore TO 0
//   SET humanScore TO 0
//
//   FUNCTION getHumanChoice()
//     SET humanChoiceRaw TO user input prompted with the message "Enter your choice" and the default value "rock"
//     SET humanChoice TO the lower-case version of humanChoiceRaw
//     RETURN humanChoice
//   ENDFUNCTION
//
//   FUNCTION getComputerChoice()
//     SET choicesArr TO an array containing "rock", "paper", "scissors"
//     SET randomIndex TO CALL getRandomNum with the length of choicesArr
//     SET computerChoice TO item of choicesArr at randomIndex
//     RETURN computerChoice
//   ENDFUNCTION
//
//   FUNCTION getRandomNum(max)
//     SET randomNum TO a random number between 0 (inclusive) and max (exclusive)
//     RETURN randomNum
//   ENDFUNCTION
//
//   FUNCTION playRound(humanChoice, computerChoice)
//     IF humanChoice equals to computerChoice THEN
//       DISPLAY message: "It's a draw!"
//     ELSE IF humanChoice is "rock" AND computerChoice is "scissors"
//     OR
//     humanChoice is "paper" AND computerChoice is "rock"
//     OR
//     humanChoice is "scissors" AND computerChoice is "paper" THEN
//     INCREMENT humanScore by 1
//       DISPLAY message: "You win! " humanChoice " beats " computerChoice
//     ELSE
//       INCREMENT computerScore by 1
//       DISPLAY message: "Computer wins! " computerChoice " beats " humanChoice"
//     ENDIF
//   ENDFUNCTION
//
//   FOR i = 1 TO 5
//     SET humanChoice TO CALL getHumanChoice
//     SET computerChoice TO CALL getComputerChoice
//     CALL playRound with humanChoice and computerChoice
//   ENDFOR
//
//   SET winnerMessage TO 
//     IF humanScore equals to computerScore THEN
//       "It's a draw game!"
//     ELSE IF humanScore is greater than computerScore THEN
//       "You win the game!"
//     ELSE
//       "Computer wins the game!"
//     ENDIF
//
//   DISPLAY message: winnerMessage
//
//   DISPLAY message: "Final score: " humanScore " - " computerScore
//
// ENDFUNCTION
//
// CALL playGame
```