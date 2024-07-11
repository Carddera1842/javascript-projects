const whoWon = require('../RPS.js');

describe("RPS", function() {

    test("returns 'TIE!' if players have the same option", function() {
        let output = whoWon.whoWon('paper', 'paper');
        expect(output).toBe("TIE!");
    });

    test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
        let output = whoWon.whoWon('rock','paper');
        expect(output).toBe("Player 2 wins!");
     });
     
     test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
        let output = whoWon.whoWon('paper','scissors');
        expect(output).toBe("Player 2 wins!");
     });

});