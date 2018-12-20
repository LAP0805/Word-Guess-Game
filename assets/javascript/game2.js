


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
        alert("you beat the entire game!!! Congratulations!");
        endGame();

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
    guessesLeft = 10;
    IsGameOver();
    generateRandomCharacter();
    deletePlayedCharacter();
    charactersAlreadyPlayed();
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

//FUNCTION to block characters already displayed from being displayed again//
function charactersAlreadyPlayed(){
    
    
}

//END FUNCTION//

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
        var bS =document.getElementById("wordGoesHere");
        bS.innerHTML= blankSlate;
         correctGuess = true;
    }
}
if (correctGuess === false){
    wrongGuesses.push(letter);
    guessesLeft --;
    var wL =document.getElementById("wrongGuesses");
wL.innerHTML = wrongGuesses;
    var tL = document.getElementById("triesLeft");
tL.innerHTML= guessesLeft;
}
if (rightGuesses.length === randomCharacter.length){
    wins ++;
    var w = document.getElementById("wins");
w.innerHTML= wins;
var wwL = document.getElementById("winLose");
wwL.innerHTML= "Huzzah! you won!";
    resetGame();
} 
if (guessesLeft === 0){
    losses ++;
    var l = document.getElementById("losses");
l.innerHTML= losses;
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

