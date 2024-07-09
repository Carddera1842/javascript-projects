// Code your orbitCircumference function here:

function circumferenceOfOrbit(radius) {
  return circumference = Math.round(2*Math.PI*radius);
}

// Code your missionDuration function here:

function missionDuration(numberOfOrbits, orbitRadius = 2000, orbitalSpeed = 28000) {
  distance = numberOfOrbits*circumferenceOfOrbit(orbitRadius)
  time = Math.round(distance/orbitalSpeed*100)/100;
  console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`)
  return  time;
}

// Copy/paste your selectRandomEntry function here:

// Code your oxygenExpended function here:

// Candidate data & crew array.
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
 
 let crew = [candidateA,candidateC,candidateE];

 function randomSelection(arr) {
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

randomSelection(crew);

function oxygenExpended(candidateObject,numberOfOrbits, orbitRadius = 2000, orbitalSpeed = 28000 ) {
  let leastO2CrewMember = findLeastO2CrewMember(crew);
  let hoursForSpacewalk = missionDuration(numberOfOrbits, orbitRadius, orbitalSpeed);
  let oxygenConsumed = Math.round(leastO2CrewMember.o2Used(hoursForSpacewalk)*1000)/1000;
  return console.log(`${leastO2CrewMember.name} will perform the spacewalk, which will last ${hoursForSpacewalk} hours and require ${oxygenConsumed} kg of oxygen.`);
}

oxygenExpended(findLeastO2CrewMember(crew),5, 2500, 35000);

function findLeastO2CrewMember(arr) {
  let mostEfficient = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].o2Used(1) < mostEfficient.o2Used(1)) {
      mostEfficient = arr[i]
    }
  }
  return mostEfficient
}



 