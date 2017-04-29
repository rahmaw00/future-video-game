$(document).ready(function(){
    $("#play").click(function(){
        console.log("hello");
        window.location.href = 'game-page.html';
    });
});

$(document).keydown(function(e) {
    switch(e.which) {
        case 37: // left
        moveRobot(+20);
        break;

        case 39: // right
        moveRobot(-20);
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function moveRobot(move) {
    var leftLimit = 0;
    var rightLimit = 600;
    var robotPosition = document.getElementById("robot-div").style.marginLeft;
    robotPosition = parseInt(robotPosition, 10);
    console.log("robot" + robotPosition);
     if ((robotPosition < leftLimit) && (move > 0)) {
         console.log("too much left");
         return;
        }; 
     if ((robotPosition > rightLimit) && (move < 0)) {
         console.log("too much right");
         return;
     };
    console.log("position;" + document.getElementById("robot-div").style.marginLeft );
    
    // var location = document.getElementById("robot-div").style.left;
    // location = location + move;
    document.getElementById("robot-div").style.left 
    // = location;
    
    $('#robot-div').animate({
        'marginLeft' : "-=" + move + "px" }, 20);
}

