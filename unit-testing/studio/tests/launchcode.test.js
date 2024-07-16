// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("returns value of organzation as 'nonprofit'.", function() {
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("returns value of executiveDirector is 'Jeff'.", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("returns value of percentageCoolEmployees is 100.", function() {
    expect(launchcode.percentageCoolEmployees).toBe("100");
  });

  test("returns value of programsOffered as Web Development, Data Analysis, or Liftoff.", function() {
    let programsOffered = launchcode.programsOffered;
    expect(programsOffered[0]).toBe("Web Development");
    expect(programsOffered[1]).toBe("Data Analysis");
    expect(programsOffered[2]).toBe("Liftoff");
    expect(programsOffered.length).toBe(3);
  });

  test("returns 'Launch!' when passed a number that is only divisible by 2", function() {
    launchOutput = launchcode.launchOutput;
    expect(launchOutput(2)).toBe("Launch!");
  });

  test("returns 'Code!' when passed a number that is only divisible by 3", function() {
    launchOutput = launchcode.launchOutput;
    expect(launchOutput(3)).toBe("Code!");
  });

  test("returns 'Rocks!' when passed a number that is only divisible by 5", function() {
    launchOutput = launchcode.launchOutput;
    expect(launchOutput(5)).toBe("Rocks!");
  });

  test("returns 'LaunchCode!' when passed a number that is only divisible by 2 and 3", function() {
    launchOutput = launchcode.launchOutput;
    expect(launchOutput(6)).toBe("LaunchCode!");
  });

  test("returns 'Code Rocks!' when passed a number that is divisible by 3 and 5", function() {
    launchOutput = launchcode.launchOutput;
    expect(launchOutput(15)).toBe("Code Rocks!");
  });

  test("returns 'Launch Rocks!' when passed a number that is divisible by 2 and 5", function() {
    launchOutput = launchcode.launchOutput;
    expect(launchOutput(10)).toBe("Launch Rocks!");
  });

  test("returns 'LaunchCode Rocks!' when passed a number that is divisible by 2, 3, and 5", function() {
    launchOutput = launchcode.launchOutput;
    expect(launchOutput(30)).toBe("LaunchCode Rocks!");
  });

  test("returns 'Rutabagas! That doesn't work.' when passed a number that is NOT divisible by 2, 3, or 5", function() {
    launchOutput = launchcode.launchOutput;
    expect(launchOutput(17)).toBe("Rutabagas! That doesn't work.");
  });
  
});