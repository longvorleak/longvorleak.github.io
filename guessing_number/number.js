// Random Number generator

function randomNumber (min, max) {
    let nb = min + (max - min + 1) * Math.random();
    return Math.floor(nb);
  };

// Game

  function guessingGame(min, max) {
    let continueGame = true;    
    let winningNumber = randomNumber(min, max);
    let guessingNumber;
    let attemptCount = 0;
  
    do {
      // Play game
    
          guessingNumber =  parseInt(prompt(`Choose a number between ${min} and ${max}`));
          attemptCount += 1;
       
            if ((isNaN(guessingNumber) || guessingNumber < min || guessingNumber > max)){
                guessingNumber =  parseInt(prompt(`-INVALID- Choose a number between ${min} and ${max}`));
            } else if (guessingNumber == winningNumber){
                continueGame = false;
                alert(`Congrats you've guessed the correct number: ${winningNumber}. You've guessed in ${attemptCount} shots.`);
            } else if (guessingNumber < winningNumber) {
                alert("Too low! Guess a higher number.");
                console.log("The guessed number was: " + guessingNumber + ". But it's more!")
            } else {
                alert("Too high! Guess a lower number.");
                console.log("The guessed number was: " + guessingNumber + ". But it's less!")
            }
    } while (guessingNumber != winningNumber);
}     

//  continueGame = confirm("Do you want to continue playing?");
