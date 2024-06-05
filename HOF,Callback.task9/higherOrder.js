//HOF. Filter function.

//Defining an array of strings
const colors = ["red", "blue", "orange","brown","yellow",
"purple", "green", "pink", "white","dark blue"];

//Function takes 2 arguments 
function myFilterFuction(word,arr) {
    //words is an empty array
    let words = [];
    //Using a for loop to iterate every element of an array
    for (let i =0; i < word.length; i++) {
        if (arr(word[i])){
            //takes all arguments from the "colors" variable
            words.push(word[i]);
        }
    }
    return words;
};

//Function checks  6 letter strings
function sixLetters(word) {
    return word.length === 6;
};
//New array containing words with only 6 letters
let newArray = myFilterFuction(colors, sixLetters);

//Logs the outcome to the console
console.log(`Words with six letters are : ${newArray}`);
   
        
                 
    
    
  