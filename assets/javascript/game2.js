
var game = document.getElementById("gameInfo");
game.setAttribute("class", "hide");

//FUNCTION start page//
document.onkeyup = function myGame (event){
  letter = event.key.toLowerCase();   
var game = document.getElementById("gameInfo");
game.setAttribute("class", "visible");
var game = document.getElementById("startDiv");
 game.setAttribute("class", "hide");


var answers = ["malfoy",
                "weasley",
                "hagrid",
                "harry",
                "umbridge",
                "quirrell",
                "dumbledore",
                "voldemort",
                "bellatrix",
                "lovegood",
                "longbottom",
                "pettigrew",
                "severus",
                "mcgonagall",
                "lupin",
                "trelawney",
                "dobby",
                "hedwig",
                "sirius",
                "hermione"];


var blankSlate = [];
var wrongGuesses = [];
var rightGuesses = [];
var guessesLeft = 10;
var wins = 0;
var losses = 0;
var charactersAlreadyPwnd = [];



//FUNCTION if user beats entire game
function IsGameOver(){
    if (answers === undefined || answers.length == 0){
        var wwL = document.getElementById("winLose");
        wwL.innerHTML= "Congratulations! You beat the game!";
        document.getElementById("wingame").play();
    }
}
//END FUNCTION

//FUNCTION delete aleady played character from answer array//
function deletePlayedCharacter(){
var value = randomCharacter
answers = answers.filter(function(item) { 
    return item !== value
})
}
//END FUNCTION//

//FUNCTION generate random Harry Potter character//
function generateRandomCharacter (){
randomCharacter = answers[Math.floor(Math.random()*answers.length)];
charactersAlreadyPwnd.push(randomCharacter);
console.log(randomCharacter);
}
//END FUNCTION

// FUNCTION fill empty array with _'s length of randomCharacter name//
function generateBlankSlate(){
for(var i = 0; i < randomCharacter.length; i ++){
       for(var j = 0; j < randomCharacter[i].length; j ++){
           blankSlate.push(" _");
       }
}console.log(blankSlate);
}
//END FUNCTION

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
        bS.innerHTML= blankSlate.join(" ");
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

//FUNCTION letter already guessed
function alreadyGuessed(){
    var wwL = document.getElementById("winLose");
wwL.innerHTML= "You already played that letter!";
setTimeout(function(){
    document.getElementById("winLose").innerHTML ="Guess a letter!";
}, 1500);
}
///END FUNCTION

////FUNCTION guess correct or not
function mainGame (){
    correctGuess = false;
if (event.keyCode < 65 || event.keyCode > 90){
    return correctGuess = false;
}
else {
 
if (rightGuesses.includes(letter)){
       return alreadyGuessed();
}
if (wrongGuesses.includes(letter)){
    return alreadyGuessed();
}
for(var i = 0; i < randomCharacter.length; i ++){
    if (randomCharacter[i] === letter){   
        rightGuesses.push(letter);
        var cL= document.getElementById("rightGuesses");
        cL.innerHTML= rightGuesses.join(" ");
        blankSlate.splice(i,1,letter);
        console.log(blankSlate);
        console.log( "right guesses: " + rightGuesses);
        var bS =document.getElementById("wordGoesHere");
        bS.innerHTML= blankSlate.join(" ");
         correctGuess = true;
    }
}
if (correctGuess === false){
    wrongGuesses.push(letter);
    guessesLeft --;
    console.log("wrong guesses: " + wrongGuesses);
    console.log("guesses left: " + guessesLeft);
    var wL =document.getElementById("wrongGuesses");
wL.innerHTML = wrongGuesses.join(" ");
    var tL = document.getElementById("triesLeft");
tL.innerHTML= guessesLeft;
}
if (rightGuesses.length === randomCharacter.length){
    wins ++;
    document.getElementById("win").play();
    deletePlayedCharacter();
    console.log("characters already played: " + charactersAlreadyPwnd);
    
    console.log("you win!");
    console.log("wins: " + wins);
    console.log("___________");
    var w = document.getElementById("wins");
w.innerHTML= wins;
var wwL = document.getElementById("winLose");
wwL.innerHTML= "Huzzah! You got it!";
setTimeout(resetGame, 2000);
    
} 
if (guessesLeft === 0){
    document.getElementById("lose").play();
    losses ++;
    setTimeout(resetGame, 2000);
    var wwL = document.getElementById("winLose");
wwL.innerHTML= "You lost!";
    console.log("you lose!");
    console.log("losses: " + losses);
    console.log("_____________");
    var l = document.getElementById("losses");
l.innerHTML= losses;   
}   
}
}
//END FUNCTION

///FUNCTION listen for user input///
document.onkeyup = function Game1 (event){
    if(event.keyCode > 64 && event.keyCode < 91){
    letter = event.key.toLowerCase();   
    mainGame();}
}
//END FUNCTION//

resetGame();

}