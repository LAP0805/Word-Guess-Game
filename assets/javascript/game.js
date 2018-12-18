


var answers = [["m","a","l","f","o","y"], 
                ["s","n","a","p","e"],
                ["h","a","g","r","i","d"],
                ["l","u","n","a"],
                ["u","m","b","r","i","d","g","e"],
                ["s","l","u","g","h","o","r","n"]];


var blankSlate = [];

var wrongGuesses = 4;

//generate random Harry Potter character//
var randomCharacter = answers[Math.floor(Math.random()*answers.length)];

console.log(randomCharacter);

//fill empty array with _'s length of randomCharacter name//
for(var i = 0; i < randomCharacter.length; i ++){
       for(var j = 0; j < randomCharacter[i].length; j ++){
           blankSlate.push(" _");
       }
    
}
console.log(blankSlate);

//FUNCTION winning message//
function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
            console.log("you win!")
    }

    return true;
}

//FUNCTION

//take in user input//
document.onkeyup = function(event) {
    var letter = event.key;

        //display correct letter in blankSlate array// alert user if all letters guessed
       if(randomCharacter[0] === letter){
          blankSlate.splice(0,1,letter);
          console.log(blankSlate);
          console.log("Guess another letter");
        }
        else if (randomCharacter[1]=== letter){
            blankSlate.splice(1,1,letter);
            console.log(blankSlate);
            console.log("Guess another letter"); 
        }
        else if (randomCharacter[2] ===letter){
            blankSlate.splice(2,1,letter);
            console.log(blankSlate); 
            console.log("Guess another letter"); 
        }
        else if (randomCharacter[3] === letter){
            blankSlate.splice(3,1,letter);
            console.log(blankSlate);  
            console.log("Guess another letter");
        }
        else if (randomCharacter[4] === letter){
            blankSlate.splice(4,1,letter);
            console.log(blankSlate);  
            console.log("Guess another letter");
        }
        else if (randomCharacter[5] === letter){
            blankSlate.splice(5,1,letter);
            console.log(blankSlate);  
            console.log("Guess another letter");
        }
        else if (randomCharacter[6] === letter){
            blankSlate.splice(6,1,letter);
            console.log(blankSlate);  
            console.log("Guess another letter");
        }
        else if (randomCharacter[7] === letter){
            blankSlate.splice(7,1,letter);
            console.log(blankSlate);  
            console.log("Guess another letter");
        }
        else if (randomCharacter[8] === letter){
            blankSlate.splice(8,1,letter);
            console.log(blankSlate); 
            console.log("Guess another letter"); 
        }
      //tell user how many wrong guesses they have left, and alert if game is lost
       else{ 
          console.log("wrong");
         var remainingGuesses = wrongGuesses --; 
         console.log("you have " + remainingGuesses + " guesses left");
         console.log("Guess another letter");
         if (remainingGuesses === 0){
             console.log("You lose!");
         }
        }
    arraysEqual(blankSlate, randomCharacter);
    }
    //END FUNCTION//
   

    //winning message//
    
        
    
for (var k = 0; k < randomCharacter.length; k ++)


    if(randomCharacter[k] === letter){
        blankSlate.splice(k,1,letter);
        console.log(blankSlate);
        console.log("Guess another letter");
    }
    //tell user how many wrong guesses they have left, and alert if game is lost
     else{ 
        console.log("wrong");
       var remainingGuesses = wrongGuesses --; 
       console.log("you have " + remainingGuesses + " guesses left");
       console.log("Guess another letter");
       if (remainingGuesses === 0){
           console.log("You lose!");
       }
      }