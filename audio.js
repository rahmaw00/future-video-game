function playAudio(){
var audioCtx = new AudioContext();
var osc = audioCtx.createOscillator();
osc.connect(audioCtx.destination);

osc.frequency.value = 700;

osc.start();
osc.stop(audioCtx.currentTime + 1);
};