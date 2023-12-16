const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
      return userInput;
    } else {
        console.log("Please type 'rock', 'paper', or 'scissors'");
    }
  };
  
  /* userInput = "stuf"
  console.log(getUserChoice(userInput)) */
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random()*4);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
      case 3:
        return "bomb";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "Tie game!";
    }
    if (userChoice === "rock" && computerChoice === "paper") {
      return "Computer Wins. Sucks to be you.";
    }
    if (userChoice === "paper" && computerChoice === "rock") {
      return "You win. Oh, joy.";
    }
    if (userChoice === "scissors" && computerChoice === "paper") {
      return "You win. Oh, joy.";
    }
    if (userChoice === "bomb") {
      return "Frickin cheater.";
    }
  };
  
  /* userChoice = "rock"
  computerChoice = "paper"
  console.log(determineWinner(userChoice, computerChoice)); */
  
  const playGame = () => {
    const userChoice = getUserChoice("bomb");
    const computerChoice = getComputerChoice("");
    console.log(userChoice);
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame();