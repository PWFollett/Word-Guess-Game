// GLOBAL VARIABLES 
// Array of Dogs
var wordsList = ["husky", "shepard", "pug", "golden", "boxer", "pointer",
    "yorkie", "hound", "basenji", "pinscher", "greyhound", "corgi"];

// Solution 
var Word = " _ ";
// Breaks the solution into individual letters to be stored in array
var lettersInWord = [];

// Number of blanks based on solution
var numBlanks = 0;

// solved and blank letters
var blanksAndcorrects = [];

// Incorrect Guesses =
var incorrectGuesses = [];

// Counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses;
//Others
var keyPressed = false;
var gamestarted = false;
var lettersPressed = document.getElementById("guesses-wrong");



//FUNCTION

document.onkeyup = function (event) {
    console.log("this is our key", event.keyCode);
    if (event.keyCode === 13 && gamestarted === false) {
        gamestarted = true;
        startGame();
        var eventKeys = event.key; 
        lettersPressed.textContent += eventKeys;
    } else {
       playGame(event.key)
    }
};

function updateWordDisplay() {
    var wordReplacement = blanksAndcorrects.join(' ');
    document.getElementById("word-fill").textContent = wordReplacement;
}
function startGame() {
    blanksAndcorrects = [];
    numGuesses = 10;
    Word = wordsList[Math.floor(Math.random() * wordsList.length)];
    lettersInWord = Word.split("");
    numBlanks = lettersInWord.length;
    // Fills up the Blanks with the right amount of blanks, based on the amount of letters in the solution
    for (var i = 0; i < numBlanks; i++) {
        blanksAndcorrects.push("_");
    }
    updateWordDisplay();
}
// PLAY GAME FUNCTION
function playGame(userGuess) {
    console.log("this is our user guess", userGuess);
    console.log("current game word", Word);
    console.log("Is letter in Word?", Word.indexOf(userGuess))
    if (Word.indexOf(userGuess) >= 0) {
        // alert(userGuess+" in this word " + Word);
    }
    
    checkGuess(userGuess);

}
function checkGuess(letter) {
    console.log(letter);
    var letterIndex = Word.indexOf(letter);

    if (letterIndex === -1) {
        numGuesses--;
        document.getElementById("guesses-remaining").textContent = numGuesses
        if (numGuesses < 1) {
            alert("YOU LOSE!");
            gamestarted = false;
            document.getElementById("counter-losses").textContent = lossCounter;
            lossCounter++;

        }

    } else {
        console.log(blanksAndcorrects, '!' + blanksAndcorrects[letterIndex] + '!');
        blanksAndcorrects[letterIndex] = letter;
        console.log(blanksAndcorrects);
        updateWordDisplay();
        blanksAndcorrects.indexOf("_")
        var blanksIndex = blanksAndcorrects.indexOf("_");
        if (blanksIndex === -1) {
            alert("YOU WIN!");
            gamestarted = false;
            document.getElementById("counter-wins").textContent = winCounter;
            winCounter++;
        }
        for (var i = 0; i < incorrectGuesses.length; i++) {
            if (userGuess === incorrectGuesses[i]){ 
            incorrectGuesses()}}
            
    }

        document.getElementById("guesses-wrong").textContent = incorrectGuesses;     
    };
