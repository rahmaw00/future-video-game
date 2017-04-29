var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

$(document).keydown(function(e) {
    console.log("hi");
    switch(e.which) {
        case 37: // left
        moveRobot(-10);
        break;

        case 39: // right
        moveRobot(+10);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function moveRobot(move) {
    console.log("gotKeyPress" + move);
}