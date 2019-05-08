// GLOBAL VARIABLES 
// Array of Dogs
var wordsList = ["husky", "shepard", "cockapoo", "goldenlab", "beagle", "bulldog",
    "yorkie", "weinerdog", "mastiff", "saintbernard", "greyhound", "poodle"];

// Solution 
var wordAnswer = "_"

// Breaks the solution into individual letters to be stored in array
var lettersInWord = [];

// Number of blanks based on solution?
var numBlanks = 0;

// solved and blank letters
var blanksAndcorrects = [];

// Incorrect Guesses =
var incorrectGuesses = [];

// Counters
var winCounter = 0;
var lossCounter = 0;
var MaxnumGuesses = 9;
var numGuesses = 0;
//Others
var keyPressed = false;
var isDone = false;
var Word = "_";
var gamestarted = false;


//FUNCTION

document.onkeydown = function (event) { 
  //  console.log("this is our key", event.keyCode);
    if (event.keyCode === 13 && gamestarted === false) {
        gamestarted = true; 
        startGame()   
    } else {
      // console.log("play with this letter", event.key) 
       playGame(event.key)
    }
      };
function startGame() {
    Word = wordsList[Math.floor(Math.random() * wordsList.length)];
    console.log(Word);
    var wordReplacement = Word.replace(/./g, "-");

    document.getElementById("word-fill").innerHTML = wordReplacement;
}
// PLAY GAME FUNCTION
function playGame(userGuess) {
    console.log("this is our user guess", userGuess);
    console.log("current game word", Word);
    console.log("Is letter in Word?", Word.indexOf(userGuess))
    if (Word.indexOf(userGuess) >= 0){
        alert(userGuess+" in this word " + Word)
    }

}

// Variable Reset
numGuesses = MaxnumGuesses
incorrectGuesses = [];

// for loop to add word?
for (let i = 0; i < Word.length; i++) {
    blanksAndcorrect[i] = "_";
}

// LOSER FUNCTION
function isLoser() {
    if (numGuesses <= 0) {
        lossCounter++;
        isDone = true;
    }
};
function checkGuess(letter) {
    //if letter is guessed
    if (blanksAndcorrects.indexOf(letter) === -1) {
        blanksAndcorrects.push(letter);
        // if letter isnt present in answer
        if (Word.indexOf(letter) === -1) {
            numGuesses--;
            if (numGuesses <= 3) {
                document.getElementById("Guesses");
            }
            else {
                for (var i = 0; i < Word.length; i++) {
                    if (letter === Word[i]) {
                        wordAnswer[i] = letter;
                    }
                }
            }
        }
    }


};