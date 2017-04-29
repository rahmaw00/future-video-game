var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "#FF0000"
   
var blocks = [];
//Generates the falling block
setInterval(function() {
    var block = {
        x: Math.random() * (canvas.width - 20),
        y: 0,
        width: 20,
        height: 20,
        speed: Math.random()*20,

    }
    blocks.push(block);
}, 2000);

setInterval(function() {
    ctx.clearRect(0, 0, 500, 700);
    blocks.forEach(function(block){
        block.y +=block.speed;
        ctx.fillRect(block.x, block.y, block.width, block.height);
    });
}, 200)
