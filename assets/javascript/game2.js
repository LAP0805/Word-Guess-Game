


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
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var charactersAlreadyPwnd = [];


//FUNCTION reset everything after beating everything
function endGame(){
    window.location.reload()
}
//END FUNCTION//

//FUNCTION if user beats entire game
function IsGameOver(){
    if (answers === undefined || answers.length == 0){
        alert("You have reached the end of the game! Congratulations!");
        setTimeout(endGame, 1000);
    

    }
}


//END FUNCTION

//delete aleady played character from answer array//
function deletePlayedCharacter(){
var value = randomCharacter
answers = answers.filter(function(item) { 
    return item !== value
})
}

//END FUNCTION//

//generate random Harry Potter character//
function generateRandomCharacter (){
randomCharacter = answers[Math.floor(Math.random()*answers.length)];
charactersAlreadyPwnd.push(randomCharacter);
console.log(randomCharacter);
}

//fill empty array with _'s length of randomCharacter name//
function generateBlankSlate(){
for(var i = 0; i < randomCharacter.length; i ++){
       for(var j = 0; j < randomCharacter[i].length; j ++){
           blankSlate.push(" _");
           
       }
       
}console.log(blankSlate);
}

//FUNCTION reset game
function resetGame(){
    wrongGuesses = [];
    rightGuesses = [];
    guessesLeft = 10;
    IsGameOver();
    generateRandomCharacter();
    blankSlate = [];
    generateBlankSlate();
    var bS =document.getElementById("wordGoesHere");
        bS.innerHTML= blankSlate;
        var tL = document.getElementById("triesLeft");
        tL.innerHTML= guessesLeft;
        var w = document.getElementById("wins");
        w.innerHTML= wins;
        var l = document.getElementById("losses");
        l.innerHTML= losses;
        var cL= document.getElementById("rightGuesses");
        cL.innerHTML= rightGuesses;
        var wL =document.getElementById("wrongGuesses");
        wL.innerHTML = wrongGuesses;
        var wwL = document.getElementById("winLose");
wwL.innerHTML= "Guess a letter!";
    

}
//END FUNCTION

////FUNCTION guess correct or not
function mainGame (){
    correctGuess = false;
if (rightGuesses.includes(letter)){
       return alert("you already played that letter");
    }
if (wrongGuesses.includes(letter)){
    return alert("you already played that letter");
}
for(var i = 0; i < randomCharacter.length; i ++){
    if (randomCharacter[i] === letter){   
        rightGuesses.push(letter);
        var cL= document.getElementById("rightGuesses");
        cL.innerHTML= rightGuesses;
        blankSlate.splice(i,1,letter);
        console.log(blankSlate);
        console.log( "right guesses: " + rightGuesses);
        var bS =document.getElementById("wordGoesHere");
        bS.innerHTML= blankSlate;
         correctGuess = true;
    }
}
if (correctGuess === false){
    wrongGuesses.push(letter);
    guessesLeft --;
    console.log("wrong guesses: " + wrongGuesses);
    console.log("guesses left: " + guessesLeft);
    var wL =document.getElementById("wrongGuesses");
wL.innerHTML = wrongGuesses;
    var tL = document.getElementById("triesLeft");
tL.innerHTML= guessesLeft;
}
if (rightGuesses.length === randomCharacter.length){
    wins ++;
    deletePlayedCharacter();
    console.log("characters already played: " + charactersAlreadyPwnd);
    
    console.log("you win!");
    console.log("wins: " + wins);
    console.log("___________");
    var w = document.getElementById("wins");
w.innerHTML= wins;
var wwL = document.getElementById("winLose");
wwL.innerHTML= "Huzzah! you won!";
setTimeout(resetGame, 1000);
    
} 
if (guessesLeft === 0){
    losses ++;
    setTimeout(resetGame, 1000);
    var wwL = document.getElementById("winLose");
wwL.innerHTML= "You lost!";
    console.log("you lose!");
    console.log("losses: " + losses);
    console.log("_____________");
    var l = document.getElementById("losses");
l.innerHTML= losses;

    
    
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

var bS =document.getElementById("wordGoesHere");
bS.innerHTML= blankSlate;
var tL = document.getElementById("triesLeft");
tL.innerHTML= guessesLeft;
var w = document.getElementById("wins");
w.innerHTML= wins;
var l = document.getElementById("losses");
l.innerHTML= losses;
var cL= document.getElementById("rightGuesses");
cL.innerHTML= rightGuesses;
var wL =document.getElementById("wrongGuesses");
wL.innerHTML = wrongGuesses;
var wwL = document.getElementById("winLose");
wwL.innerHTML= "Guess a letter!";

