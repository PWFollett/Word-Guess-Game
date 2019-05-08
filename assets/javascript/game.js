// GLOBAL VARIABLES 
// Array of Dogs
var wordsList = ["husky", "shepard", "cockapoo", "goldenlab", "beagle", "bulldog", 
"yorkie", "weinerdog", "mastiff", "saintbernard", "greyhound", "poodle"];

// Solution 
var Word = "_";

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

var keyPressed = false;
var isDone = false;


//FUNCTION

document.addEventListener('keydown', function() {
    if (keyCode == 13)
document.onkeydown = function() {startGame()};
function startGame(){
    Word = wordsList[Math.floor(Math.random()* wordsList.length)];
    console.log(Word);
    var wordReplacement = Word.replace(/./g, "-");
    
    document.getElementById("word-fill").innerHTML = wordReplacement;
}


// Variable Reset
numGuesses = MaxnumGuesses
incorrectGuesses = [];

// for loop to add word?
for( let i = 0; i < Word.length; i++) {
    blanksAndcorrect[i] = "_";
}

// LOSER FUNCTION
function isLoser(){
 if (numGuesses <=0) {
    lossCounter ++ ;
    isDone = true; 
 }
}; 
function checkGuess(letter){

//if letter is guessed
if (blanksAndcorrects.indexOf(letter) === -1 ) {
    blanksAndcorrects.push(letter);
    // if letter isnt present in answer
    if (Word.indexOf(letter) === -1) {
        numGuesses--;
        if(numGuesses <= 3) {
            document.getElementById("Guesses");
        }
        else {
            for (var i = 0)
        }
    }
}


}