function playAudio(){
var audioCtx = new AudioContext();
var osc = audioCtx.createOscillator();
osc.connect(audioCtx.destination)
osc.start();    
};