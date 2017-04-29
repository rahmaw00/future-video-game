var background;
var robotCanvas;
var robotX;
var y;

var canvas;
var ctx;
var noteImage = new Image();
noteImage.src = "Images/note1.png";

var score = 0;

// ctx.fillStyle = "#FF0000"

var notes = [];
var obstacles = [];

//Create note function
function createNote() {
    return {
        x: Math.random() * (canvas.width - 20),
        y: 0,
        width: 20,
        height: 20,
        speed: Math.random() * 30,
    }
}
//Creates notes
function createObstacle() {
    return {
        x: Math.random() * (canvas.width - 20),
        y: 0,
        width: Math.random() * 30 + 30,
        height: 20,
        speed: Math.random() * 30,
    }
}

//Generates the falling block
setInterval(function() {
    if (Math.random() <= .25) {
        var obstacle = createObstacle();
        obstacles.push(obstacle);
    }
    else {
        var note = createNote();
        notes.push(note);

    }
}, 3000);
//SPEED IT UPDATES
setInterval(function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    background = document.getElementById('background');
    ctx.drawImage(background, 0, 0);
    ctx.drawImage(robotCanvas, robotX, 500, 100, 100);
    notes.forEach(function(note, index) {
        note.y += note.speed;
        ctx.drawImage(noteImage, note.x, note.y, note.width, note.height);
        if (isColliding(note)) {
            score += 1;
            notes.splice(index, 1);
        }

    });
    obstacles.forEach(function(obs) {
        obs.y += obs.speed;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
    ctx.drawImage(robotCanvas, robotX, 500, 100, 100);

}, 200)

function loadplayer() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    
    // var x = canvas.width / 2;
    // var y = canvas.height - 20;
    var x = canvas.width / 2;
    robotX = 175;
    y = 600;

    var width = 100;
    var height = 100;
    // var width = canvas.width / 2;
    // var height = canvas.height - 20;
    // var player = {
    //     x:width,
    //     y:height,
    //     width:20,
    //     height:20,
    // }; 
    robotCanvas = new Image();

    robotCanvas.onload = function() {
        ctx.drawImage(robotCanvas, x, y, width, height);
    };
    // ctx.fillStyle = "#0000FF"; 

    // ctx.fillRect(player.x, player.y, player.width, player.height);
    robotCanvas.src = 'Images/robot-static.jpg';
}

$(document).keydown(function(e) {
    switch (e.which) {
        case 37: // left
            moveRobot(-20);
            break;

        case 39: // right
            moveRobot(+20);
            break;

        default:
            return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function moveRobot(move) {
    var leftLimit = -20;
    var rightLimit = 1130;
    var robotPosition = robotX;
    // robotPosition = parseInt(robotPosition, 10);
    console.log("robot" + robotPosition);
    if ((robotPosition < leftLimit) && (move < 0)) {
        console.log("too much left");
        return;
    };
    if ((robotPosition > rightLimit) && (move > 0)) {
        console.log("too much right");
        return;
    };
    //var canvas = document.getElementById("canvas");
    //var ctx = canvas.getContext("2d");
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    //notes.forEach(function(note) {
    //    note.y += note.speed;
    //    ctx.drawImage(noteImage, note.x, note.y, note.width, note.height);
    //});
    //obstacles.forEach(function(obs) {
    //    obs.y += obs.speed;
    //    ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    //});
    robotX = robotX + move;
    //ctx.drawImage(robotCanvas, robotX, 500, 100, 100);
}

function isColliding(obj) {
    if (y < obj.y + obj.height && ((obj.x > robotX && obj.x < robotX + 100) || (obj.x + obj.width < robotX + 100 && obj.x + obj.width > robotX))) {
        return true;
    }

}
