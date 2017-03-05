var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guesses = 13;
var guessesLeft = 13;
var guessedLetters = [];
var letterToGuess = null;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


var updateGuessesLeft = function() {
  
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
};

var updateLetterToGuess = function() {
  this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
};
var updateGuessesSoFar = function() {
 
  document.querySelector('#guessedLetters').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
};

var reset = function() {
  totalGuesses = 13;
  guessesLeft = 13;
  guessedLetters = [];

  updateLetterToGuess();
  updateGuessesLeft();
  updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();


document.onkeyup = function(event) {
    guessesLeft--;
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedLetters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();

        if (guessesLeft > 0){
            if (userGuess == letterToGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Winner, Winner Chicken Dinner!");
                reset();
            }
        }else if(guessesLeft == 0){ 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Loser, Loser big fat loser!");
            reset();
        }
};

