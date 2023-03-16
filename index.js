// Move the mouse across the screen as a sine wave.
var robot = require("@jitsi/robotjs");

// Speed up the mouse.
robot.setMouseDelay(2);

// var twoPI = Math.PI * 2.0;
// var screenSize = robot.getScreenSize();
// var height = (screenSize.height / 2) - 10;
// var width = screenSize.width;

// for (var x = 0; x < width; x++)
// {
// 	y = height * Math.sin((twoPI * x) / width) + height;
// 	robot.moveMouse(x, y);
// }

const mouseMove=()=>{
    let twoPI = Math.PI * 2.0;
    let screenSize = robot.getScreenSize();
    let height = (screenSize.height / 2 / 2 / 2 / 2 / 2) - 10;
    let width = screenSize.width /2 / 2 / 2 / 2 / 2;
    
    console.log(`Strat mouse move !`);

    for (let x = 0; x < width; x++)
    {
    	y = height * Math.sin((twoPI * x) / width) + height;
    	robot.moveMouse(x, y);
    }
}

// function test() {
//     console.log("Hello!");
// }

// setInterval(test, 3000);

// test();
//mouseMove();


setInterval(mouseMove, 5000);

