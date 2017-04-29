function loadPlayer(){
    var canvas = document.getElementById("cohven");
    var ctx = canvas.getContext("2d");
    
    var note1 = new Image();
    note1.src = "./Images/note1.png";
    ctx.drawImage(note1);
}