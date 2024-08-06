// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", event => {
    let takeOff = document.getElementById("takeoff");
    let paragraph = document.getElementById("flightStatus");
    let height = document.getElementById("spaceShuttleHeight");
    let backgroundShuttle = document.getElementById("shuttleBackground");
    let land = document.getElementById("landing");
    let abortMission = document.getElementById("missionAbort");
    let moveUp = document.getElementById("up");
    let moveDown = document.getElementById("down");
    let moveRight = document.getElementById("right");
    let moveLeft = document.getElementById("left");
    let rocket = document.getElementById("rocket");

    function centerRocket() {
        const backgroundWidth = backgroundShuttle.clientWidth;
        const backgroundHeight = backgroundShuttle.clientHeight;
        const rocketWidth = rocket.clientWidth;
        const rocketHeight = rocket.clientHeight;
        const centerPositionLeft = backgroundWidth / 2 - rocketWidth / 2;
        const centerPositionTop = backgroundHeight - rocketHeight;
        rocket.style.left = centerPositionLeft + "px";
        rocket.style.top = centerPositionTop + "px";
      }

    function moveRocket(deltaX, deltaY) {
        const currentLeft = parseInt(window.getComputedStyle(rocket).left);
        const currentTop = parseInt(window.getComputedStyle(rocket).top);
        const newLeft = currentLeft + deltaX;
        const newTop = currentTop + deltaY;
        const maxLeft = backgroundShuttle.clientWidth - rocket.clientWidth;
        const maxTop = backgroundShuttle.clientHeight - rocket.clientHeight;
    
        if (newLeft >= 0 && newLeft <= maxLeft) {
          rocket.style.left = newLeft + "px";
        }
    
        if (newTop >= 0 && newTop <= maxTop) {
          rocket.style.top = newTop + "px";
        }
      }

    takeOff.addEventListener("click", event => {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            paragraph.innerHTML = "Shuttle in flight.";
            backgroundShuttle.style.backgroundColor = "Blue";
            height.innerHTML = parseInt(height.innerHTML) + 10000;
            moveRocket(0, -10);
        }
    });

    land.addEventListener("click", event => {
        window.alert("The shuttle is landing. Landing gear engaged.");
        paragraph.innerHTML = "The shuttle has landed.";
        backgroundShuttle.style.backgroundColor = "";
        height.innerHTML = 0;
        centerRocket();
    });

    abortMission.addEventListener("click", event => {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            paragraph.innerHTML = "Mission Aborted.";
            backgroundShuttle.style.backgroundColor = "Green";
            height.innerHTML = 0;
            centerRocket();
        }
    });

    moveUp.addEventListener("click", (event) => {
        height.innerHTML = parseInt(height.innerHTML) + 10000;
        moveRocket(0, -10);
      });
    
    moveDown.addEventListener("click", (event) => {
        height.innerHTML = parseInt(height.innerHTML) - 10000;
        moveRocket(0, 10);
      });
    
    moveLeft.addEventListener("click", (event) => {
        moveRocket(-10, 0);
      });
    
    moveRight.addEventListener("click", (event) => {
        moveRocket(10, 0);
      });

    window.addEventListener("resize", centerRocket);
    centerRocket();
});



