


var answers = ["hermione", "voldemort", "malfoy", "snape", "hagrid", "luna", "umbridge", "slughorn"]

var slats = [];

var blankSlate = [];

var wrongGuesses = 4;

//generate random Harry Potter character//
var randomCharacter = answers[Math.floor(Math.random()*answers.length)];

console.log(randomCharacter);

//fill empty array with _'s length of randomCharacter name//
for(var i = 0; i < randomCharacter.length; i ++){
    blankSlate.push("_");

}
console.log(blankSlate);

//FUNCTION

//take in user input//
document.onkeyup = function(event) {
    var letter = event.key;

        //display correct letter in blankSlate array// alert user if all letters guessed
       if(randomCharacter[0] === letter){
          blankSlate.splice(0,1,letter);
          console.log(blankSlate);}
        else if (randomCharacter[1]=== letter){
            blankSlate.splice(1,1,letter);
            console.log(blankSlate);   
        }
        else if (randomCharacter[2] ===letter){
            blankSlate.splice(2,1,letter);
            console.log(blankSlate);   
        }
        else if (randomCharacter[3] === letter){
            blankSlate.splice(3,1,letter);
            console.log(blankSlate);  
        }
        else if (randomCharacter[4] === letter){
            blankSlate.splice(4,1,letter);
            console.log(blankSlate);  
        }
        else if (randomCharacter[5] === letter){
            blankSlate.splice(5,1,letter);
            console.log(blankSlate);  
        }
        else if (randomCharacter[6] === letter){
            blankSlate.splice(6,1,letter);
            console.log(blankSlate);  
        }
        else if (randomCharacter[7] === letter){
            blankSlate.splice(7,1,letter);
            console.log(blankSlate);  
        }
        else if (randomCharacter[8] === letter){
            blankSlate.splice(8,1,letter);
            console.log(blankSlate);  
        }
      //tell user how many wrong guesses they have left, and alert if game is lost
       else{ 
          console.log("wrong");
         var remainingGuesses = wrongGuesses --; 
         console.log("you have " + remainingGuesses + " guesses left");
         if (remainingGuesses === 0){
             console.log("You lose!");
         }
        }
    }

    //END FUNCTION//
  
    





    // var my_array = ["baseball", "basketball", "tennis", "golf"];
    // var start_index = 1
    // var number_of_elements_to_remove = 2;
    // var removed_elements = my_array.splice(start_index, number_of_elements_to_remove, "boxing", "bowling", "volleyball");
    // console.log(removed_elements);
    // //["tennis", "golf"]
    // console.log(my_array);
    // //["baseball", "boxing", "bowling", "volleyball", "golf"];