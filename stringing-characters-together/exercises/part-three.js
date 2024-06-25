//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'

console.log(language.slice(0,1)+language.slice(4,5));

//2. Without using slice(), use method chaining to accomplish the same thing.

console.log(language[language.indexOf('J')] + language[language.indexOf('S')]);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."

let initials = language[0] + language[4];

console.log(`The abreviation for 'JavaScript' is ${initials}`);

//4. Just for fun, try chaining 3 or more methods together, and then print the result.

console.log(language.slice(4).toLowerCase().toUpperCase())

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';

console.log(notTitleCase.slice(0,1).toUpperCase() + 'itle ' + notTitleCase.slice(6,7).toUpperCase() + 'ase')