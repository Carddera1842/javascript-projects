const input = require('readline-sync');
let str = "LaunchCode";
let num = '';


//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

<<<<<<< HEAD
let newStr = str.slice(3,10).concat(str.slice(0,3));
=======
let str3 = str.slice(3,10).concat(str.slice(0,3));

console.log(`If you relocate the first three letters of ${str}, you get the pseudo-pig latin word, ${str3}!`)
>>>>>>> 8787458dffb1ad1b059c303d84fba5fae323eeb2

//Use a template literal to print the original and modified string in a descriptive phrase.

console.log(`If you move the first three letters in LaunchCode to the end, you get ${newStr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

<<<<<<< HEAD
let num = '';
num = input.question('How many letters need to be relocated?');

let newWord = str.slice(num,10).concat(str.slice(0,num));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (num > str.length || isNaN(num)) {
    console.log(`Oops, LaunchCode only has 10 letters. Here is 3 letters relocated. ${newStr}`)
} else {
    console.log(newWord)
=======
num = input.question("How many letters do you want to relocate? ");
newStr = str.slice(num,10).concat(str.slice(0,num));

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (num > str.length) {
    console.log(`Sorry! LaunchCode only has 10 letters! Here is an example of 3 relocated numbers! ${str3}`)
} else {
console.log(newStr)
>>>>>>> 8787458dffb1ad1b059c303d84fba5fae323eeb2
}