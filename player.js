
function loadplayer(){
    var canvas = document.getElementById("canvas");

var ctx = canvas.getContext("2d");

var player = {
    x:canvas.width / 2,
    y:250,
    // x:50,
    // y:0,
    width:20,
    height:20,
}; 

ctx.fillStyle = "#0000FF"; 

ctx.fillRect(player.x, player.y, player.width, player.height);
}



