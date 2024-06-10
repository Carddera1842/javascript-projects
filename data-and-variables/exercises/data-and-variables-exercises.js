// Declare and assign the variables below

let shuttleName = 'Determination';
let shuttleSpeedMph = 17500;
let marsDistanceKm = 225000000;
let moonDistanceKm = 384400;
const milesPerKm= 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof (shuttleName));
console.log(typeof (shuttleSpeed));
console.log(typeof (marsDistance));
console.log(typeof (moonDistance));
console.log(typeof (milesPerKilometer));

// Calculate a space mission below

let milesToMars = marsDistanceKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

// Print the results of the space mission calculations below

console.log(shuttleName + " will take " + daysToMars + " days to reach mars.");

// Calculate a trip to the moon below
// Print the results of the trip to the moon below

let milesToMoon = moonDistanceKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// Print the results of the trip to the moon below

console.log(shuttleName + " will take " + daysToMoon + " days to reach the Moon");