var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var noteImage = new Image();
noteImage.src = "Images/note1.png";

ctx.fillStyle = "#FF0000"

var notes = [];
var obstacles = [];

//Create note function
function createNote() {
    return {
        x: Math.random() * (canvas.width - 20),
        y: 0,
        width: 20,
        height: 20,
        speed: Math.random() * 20,
    }
}
//Creates notes
function createObstacle() {
    return {
        x: Math.random() * (canvas.width - 20),
        y: 0,
        width: Math.random() * 30 + 30,
        height: 20,
        speed: Math.random() * 20,
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
    ctx.clearRect(0, 0, 500, 700);
    notes.forEach(function(note) {
        note.y += note.speed;
        ctx.drawImage(noteImage, note.x, note.y, note.width, note.height);
    });
    obstacles.forEach(function(obs) {
        obs.y += obs.speed;
        ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
    });
}, 200)
function isColliding(obj,player){
    if(player.y< obj.y+obj.height && (obj.x >player.x && obj.x<player.x+player.width) || (obj.x+width < player.x+player.width &&obj.x+width>player.x)) {
        
    } 
    
}