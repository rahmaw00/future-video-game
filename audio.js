function playAudio(){
    var audioCtx = new AudioContext();
    var osc = audioCtx.createOscillator();
    var pitches = [220,247,262,294,330,349,392];
    var pitch = pitches[Math.floor(Math.random() * 6)];      
    
    osc.connect(audioCtx.destination);
    osc.frequency.value = pitch;
    osc.start();
    osc.stop(audioCtx.currentTime + 1);
};