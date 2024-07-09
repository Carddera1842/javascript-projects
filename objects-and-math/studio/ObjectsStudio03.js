// Code your crewMass function here:


// Code your fuelRequired function here:


// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
let crew = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

function crewMass(astronauts) {
  let massForCrew = 0;
  for (i = 0; i < crew.length; i++) {
    massForCrew = massForCrew + astronauts[i].mass;
  }
  return Math.round(massForCrew*10)/10;
}
 
console.log(crewMass(crew));

let massOfCrew = crewMass(crew);
let massOfRocketAndSupplies = 75000;
fuelToLift1Kg = 9.5;



function fuelRequired() {
for (i = 0; i < crew.length; i++) {
  if (crew[i].species === "dog" || crew[i].species === "cat"){
    massOfCrew = massOfCrew + 200;
  } else {
    massOfCrew = massOfCrew + 100;
  }
}
totalMassForTrip = massOfRocketAndSupplies + massOfCrew;
fuelNeededToReachLeo = Math.ceil(fuelToLift1Kg * totalMassForTrip);
return console.log(`The mission has a launch mass of ${totalMassForTrip} kg and requires ${fuelNeededToReachLeo} kg of fuel.`)
}

fuelRequired();