//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {
    constructor(name, mass, scores) {
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
    }
    average() {
        let total = 0;
        for (let i = 0; i < this.scores.length; i++) {
            total += this.scores[i];
        }
        return Math.round(total/this.scores.length*10)/10
    }
    status() {
        if (this.average() < 70) {
            return "Rejected";
        } else if (this.average() > 69 && this.average() < 80) {
            return "Probationary";
        } else if (this.average() > 79 && this.average() < 90) {
            return "Reserve";
        }else if (this.average() > 89) {
            return "Accepted";
        }
    }
}

const bear = new CrewCandidate("Bubba Bear", 135, [88,85,90]);
const dog = new CrewCandidate("Merry Maltese", 1.5, [93,88,97]);
const aligator = new CrewCandidate("Glad Gator", 225, [75,78,62]);

bear.addScore(83);


console.log(`${bear.name} earned an average testscore of ${bear.average()}% and has a status of ${bear.status()}.`);
console.log(`${dog.name} earned an average testscore of ${dog.average()}% and has a status of ${dog.status()}.`);
console.log(`${aligator.name} earned an average testscore of ${aligator.average()}% and has a status of ${aligator.status()}.`);

//Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.

let upToReserve = 0
while (aligator.status() === "Probationary") {
    aligator.addScore(100)
    upToReserve++
}
console.log(`${aligator.name} needs ${upToReserve} perfect tests to reach Reserve status.`)

let uptoAccepted = 0;
while (aligator.status() === "Reserve") {
    aligator.addScore(100);
    uptoAccepted++
}
console.log(`${aligator.name} needs ${upToReserve + uptoAccepted} perfect tests to reach Accepted status.`)