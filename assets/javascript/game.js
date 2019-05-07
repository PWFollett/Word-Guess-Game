// GLOBAL VARIABLES 
// Array of Dogs
var wordsList = ["husky", "shepard", "cockapoo", "goldenlab", "beagle", "bulldog", 
"yorkie", "weinerdog", "mastiff", "saintbernard", "greyhound", "poodle"];
// Solution 
var Word = "";
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
var numGuesses = 9;
