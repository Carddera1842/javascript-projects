let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

<<<<<<< HEAD

=======
let foodCabinet = food.split(',').sort();
let equipmentCabinet = equipment.split(',').sort();
let petsCabinet = pets.split(',').sort();
let sleepAidsCabinet = sleepAids.split(',').sort();
>>>>>>> 8787458dffb1ad1b059c303d84fba5fae323eeb2

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [foodCabinet, equipmentCabinet, petsCabinet, sleepAidsCabinet];



//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let cabinetSelect = '';

const input = require('readline-sync');
cabinetSelect = input.question("Select Cabinet (0-3): ")

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (cabinetSelect > 3 || cabinetSelect < 0 || isNaN(cabinetSelect)) {
    console.log(`Sorry! That is not a number between 0-3!`);
} else {
    thingSelect = input.question("Which item? ")
}


if (cargoHold[Number(cabinetSelect)].includes(thingSelect)) {
    console.log(`Cabinet ${cabinetSelect} DOES contain ${thingSelect}.`)
} else {
    console.log(`Cabinet ${cabinetSelect} DOES NOT contain ${thingSelect}.`)
}
//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”

