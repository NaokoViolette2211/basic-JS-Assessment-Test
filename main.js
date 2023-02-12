/* Variables & Data Types */

//Question 1: There are 8 Primitive Data Types in JavaScript, list them all 
//Note: Arrays and Objects are not primitive data-types

//======== Question 1 Answer: =============
//  string, number, boolean, null, undefined, Bigint, Symbol and Object
//=========================================

//Question 2: Is JavaScript a dynamically typed Language? or a Statically typed language?

//==================Question 2 Answer: ==============
// a dynamically typed Language 
//===================================================

//Question 3: Variable Scoping
// Part 1 - What 2 types of scope can variables declared with the "var" keyword have?

//============Question 3 Answer: =================
// global and local
//=================================================

//Part 2 - As of ES6 JavaScript has 2 new variable declaration keywords: "let" and "const".  
//How are let and const variables scoped?

//=============Answer:============
//  blocked-scoped
//================================

//Part 3 - What is the difference between "let" and "const"? Hint: it has to do with variable reassignment

//===========Answer:=============
// let allows you to reassign the variable name but not const.
//===============================

//Question 4:

//Part 1: Read the code written below. What is wrong with the code?

// var carBrandOne = "Ford";
// let carBrandOne = "Mercedes";

// comment out the code above and write a correction to the code below this  line
//==========Answer================
var carBrandOne = "Ford";
let carBrandTwo = "Mercedes";
//================================
//Part 2: Read the code written below. What is wrong with the code?

// const myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"}
// myConstant = 10;
// comment out the code above and write a correction to the code below this  line
//==========Answer================
const myConstant = {id: 1, name: "Joe", favoriteSnack: "ice cream"}
myConstant.id = 10;
//================================

// Part 3: Read the code written below. What will happen? Will this throw an error?
const myConstant2 = {id: 2, name: "Bill", favoriteSnack: "potato chips"}
myConstant2["name"] = "James"
//==========Answer================
// No. The name "Bill" will be replaced to "James".
//================================

//Part 4: Read the code written below. Look at the function call below the defined function,
// Will declaring a let variables with the same name throw an error in this case? Why or why not?
// What will the function return?

function variablesExample(number){
    let returnMessage = '';
    if(number > 10){
        let message = "the given number is larger than 10";
        returnMessage = message;
    }else if(number === 10){
        let message = "the given number is equvalent to 10";
        returnMessage = message;
    }else{
        let message = "the given number is less than 10";
        returnMessage = message;

    }
    console.log(returnMessage);
    return returnMessage;
}
variablesExample(15);
//==========Answer================
//No, it will not throw an error because you can change a let variable name.
//================================

//Question 5: 

// Part-1: What are acceptable characters that you can use to start variable names?
//Answer: alphabet, underscore(_), 

//Part-2: What are acceptable characters that you can use to name variables (after the first character of the name)?
//=========== Answer: ==================
// underscore(_) and Capital case letter
//======================================

/* END OF VARIABLES AND STRINGS SECTION */



/* Strings */

// Given the string below,
// Part 1 - Write code that will return the 8th character of the string

// Part 2 - Then write code that will return (or console.log) "is a"
// Note - don't convert this string to an array
let coolString = "Hello World is a tradition";
//========Part 1 Answer========
console.log(coolString[7]);
//========Part 2 Answer========
console.log(coolString.slice(12, 16));
//Part 3
// How would you return the 4th from the last character from the coolString without just hard coding the index of that character?
//========Part 3 Answer=========================
console.log(coolString[coolString.length - 4]);
//Part 4
// Look at the variables below that have been initialized with string data.  
//What are the 2 ways you can concatinate these strings together?
let aString = "Back to "
let bString = "The Future"

//Write the 2 ways of concatinating the strings below this line.  Declare a new variable for the results.
//========Part 4 Answer=========================
const ab = aString + bString;
console.log(ab);
const str = ["Back to ", "The Future"].join('');
console.log(str);


/*For Loops */
// You are provided an array of strings below
// an example of a console.log is also provided

let namesArray = ["Joe", "Larry", "Bob", "James", "David", "Tim", "Jimmy", "Jessie", "Marty"];
console.log(namesArray["The first name is: ", 0]);

/*directly below this comment, 
write a for loop that iterates over the namesArray from the beginning to the end of the array and logs the names to the console */
//================ Answer ====================
for (i = 0; i < namesArray.length; i++) {
    console.log(namesArray[i]);
}
//============================================
//write a for loop that iterates over the namesArray from the END to the BEGINnING of the array and logs the names to the console
//================ Answer ====================
for (i = namesArray.length - 1; i >= 0; i--) {
    console.log(namesArray[i]);
}
//============================================

//write a for loop that iterates over the namesArray BUT only logs every other name to the console
//================ Answer ====================
for (i = 0; i < namesArray.length; i++) {
    if (i % 2 === 0) {
        console.log(namesArray[i]);
    }
}
//============================================


/*While Loops*/

// Inside the function below, Write a while loop that will console.log("Hello World") "number" times.  Use continueBoolean in your while loop's specified condition
//================ Answer ====================
let w = 0;
function whileLoopQuestion1(number){
    let continueBoolean = true;
    while(w < number) {
        console.log("Hello World");
        w++;
    }
}
whileLoopQuestion1(20);
// I could not figure it out how to use continueBoolean in the while loop.
//============================================

/* Array Methods */

//What does the Array.prototype.push() method do? What does it return?
//=====Answer: append data to the end of the array ===============

//What does the Array.prototype.unshift() method do? What does it return?
//=====Answer: append data to the beginning of the array ========

//What does the Array.prototype.pop() method do? What does it return?
//=====Answer: removes the last element from an array and returns that element ===========

//What does the Array.prototype.shift() method do? What does it return?
//=====Answer: it removes the first element from an array ========

// What does the Array.prototype.join() method do? What does the 1 optional parameter do to modify how this method works? What does it return?
//=====Answer:====================================================
// creates and returns a new string by concatenating all of the elements in an array, separated by comma or a specified separator string.
// const numbers = [1, 2, 3];
// console.log(numbers.join()); // 1, 2, 3
// ===============================================================

//What does the Array.prototype.slice() method do? What will it return?
//=====Answer:=============================================
// it returns a portion of an array into a new array
// const fruits = ['banana', 'apple', 'grape', 'orange'];
// console.log(fruits.slice(1, 3)); //['apple', 'grape']
//=========================================================

//What does the Array.prototype.splice() method do? What will it return?
//=====Answer:=============================================
// it changes the contents of an array by removing or replacing existing elements
// const myFruits = ['banana', 'apple', 'grape', 'orange'];
// myFruits.splice(1, 1, 'kiwi');// removed 'apple'
// console.log(myFruits);//['banana', 'kiwi', 'grape', 'orange']
//=========================================================

//Look at the Array Below
let nestedArray = [ [1,2,3], [4,5,6], [7,8,9], [[10,11,12],[13,14,15],[16,17,18]], 19];

//How many dimensions does this array have?
//=====Answer: 3 dimensions ================

//How would you access the value 11?
//=====Answer:=========================
// console.log(nestedArray[3][0][1]);
//=====================================

// how would you access the value 5?
//=====Answer:=========================
// console.log(nestedArray[1][1]);
//=====================================

// How would you access the last element in the array without knowing the array's length?
//=====Answer:=========================
// const lastElement = nestedArray.slice(-1);
// console.log(lastElement); //-19
//=====================================

// How would you access the 3rd element in the array?  What will that element's value be?
//=====Answer:=========================
// console.log(nestedArray[2]); //[7, 8, 9]
//=====================================


/* Functions */

/* Convert Celsius to Fahrenheit
The formula to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

write a function named convertCtoF.
The function should take 1 argument.
The parameter should be named celsius.

Your function needs to accept an argument of a temperature in Celsius, and return the equivalent temperature in Fahrenheit
Use the formula mentioned above to help convert the Celsius temperature to Fahrenheit.
convertCtoF(30); should return 86;

*/

//=====Answer:=========================
function convertCtoF(celsius) {
    return (celsius * (9/5)) + 32;
};
console.log(convertCtoF(30));

//F = (C * 9/5) + 32