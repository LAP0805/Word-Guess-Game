


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

//generate random Harry Potter character//
var randomCharacter = answers[Math.floor(Math.random()*answers.length)];
var randomCharacterArray = [];
console.log(randomCharacter);

//fill empty array with _'s length of randomCharacter name//
for(var i = 0; i < randomCharacter.length; i ++){
       for(var j = 0; j < randomCharacter[i].length; j ++){
           blankSlate.push(" _");
       }
    
}
console.log(blankSlate);

//FUNCTION loser///
function loser (){
    if (wrongGuesses.length === 5){
        console.log("you lose!");
    }
}
//END FUNCTION

//FUNCTION winner
function winner(){
if (blankSlate.length === randomCharacterArray.length){
    console.log("You win! Congrats!");
}
}
//END FUNCTION

//FUNCTION letters guess

//take in user input//

    document.onkeyup = function(event) {
        var letter = event.key;
    
    for(var m = 0; m < randomCharacter.length; m ++){
    if(randomCharacter[m] === letter){
        blankSlate.splice(m,1,letter); 
        randomCharacterArray.splice(m,1,letter);
        rightGuesses.splice(m,1,letter);
        console.log(rightGuesses);
        winner();
           console.log(blankSlate); 
      }
    }
    
    }
    //END FUNCTION//


    //does blankSlate include all the charsAt of randomCharacter//
    //if yes display you win//
    
    



    
        
    
