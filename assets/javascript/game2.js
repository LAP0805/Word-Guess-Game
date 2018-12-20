


var answers = ["malfoy",
                "snape",
                "hagrid",
                "luna",
                "umbridge",
                "slughorn",
                "dumbledore",
                "voldemort",
                "bellatrix",
                "lovegood",
                "longbottom",
                "pettigrew",
                "severus",
                "mcgonagall",
                "nymphadora",
                "trelawney",
                "grindelwald",
                "neville",
                "lucius",
                "hermione"];


var blankSlate = [];
var wrongGuesses = [];
var rightGuesses = [];
var guessesLeft = 5;
var wins = 0;
var losses = 0;



//generate random Harry Potter character//
function generateRandomCharacter (){
randomCharacter = answers[Math.floor(Math.random()*answers.length)];
console.log(randomCharacter);
}

//fill empty array with _'s length of randomCharacter name//
function generateBlankSlate(){
for(var i = 0; i < randomCharacter.length; i ++){
       for(var j = 0; j < randomCharacter[i].length; j ++){
           blankSlate.push(" _");
       }
}
}

//FUNCTION reset game
function resetGame(){
    wrongGuesses = [];
    rightGuesses = [];
    guessesLeft = 5;
    generateRandomCharacter();
    charactersAlreadyPlayed();
    blankSlate = [];
    generateBlankSlate();
    console.log(blankSlate);

}
//END FUNCTION

//FUNCTION to block characters already displayed from being displayed again//
function charactersAlreadyPlayed(){
    
}

//END FUNCTION//

////FUNCTION guess correct or not
function mainGame (){
    correctGuess = false;
if (rightGuesses.includes(letter)){
       return console.log("you already played that letter");
    }
for(var i = 0; i < randomCharacter.length; i ++){
    if (randomCharacter[i] === letter){   
        rightGuesses.push(letter);
        console.log("correct guesses: " + rightGuesses);
        blankSlate.splice(i,1,letter);
        console.log(blankSlate);
         correctGuess = true;
    }
}
if (correctGuess === false){
    console.log("wrong");
    wrongGuesses.push(letter);
    guessesLeft --;
    console.log("wrong guesses: " + wrongGuesses + " Guesses left: " + guessesLeft);
}
if (rightGuesses.length === randomCharacter.length){
    wins ++;
    console.log("you win!");
    console.log("wins: " + wins + " losses: " + losses);
    console.log("_______________________");
    resetGame();
} 
if (guessesLeft === 0){
    losses ++;
    console.log("you lose!");
    console.log("wins: " + wins + " losses: " + losses);
    console.log("_______________________");
    resetGame();
    
}
}
//END FUNCTION

resetGame();

///actual game///
document.onkeyup = function myGame (event){
         letter = event.key;
         mainGame();
         

    }

//END FUNCTION//


