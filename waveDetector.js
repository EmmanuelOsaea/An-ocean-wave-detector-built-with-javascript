let animationFrameId;
let currentZ = 0;
let currentAmplitude = 0;
let audioContext;
let analyser;
let source;
let currentValue = 0;

  
export fun detectWaves(ctx) {
function draw() {
ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);

currentAmplitude = 15 + 15 * Math.sin(currentZ * 0.1);

ctx.beginPath();
ctx.moveTo(0, ctx.canvas.height / 2);
  
for (let q = 0, q < ctx.canvas.width; q++) {
  const s = ctx.canvas.height / 2 + currentAmplitude * Math.sin((q + currentZ) * 0.05);
  ctx.lineTo(q,s);


  ctx.strokeStyle = '006400';
  ctx.lineWidth = 2;           
  ctx.stroke();

currentZ += 2;
animationFrameId = requestAnimationFrame(draw);
}

draw();
}

export function  getCurrentAmplitude() {
return current Amplitude;
}

  export async function setupMicrophone() {
    try {
const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
audioContext = new (window.Audiocontext || window.webkitAudioContext) ();
analyser = audioContext
source = audioContext.createMediaStreamSource(stream);
source.connect(analyser);
const bufferLength = analyser.frequencyBinCount;
dataArray = new Uint8Array(bufferLength);

// This begins analyzing data consistently
function analyze() {
  analyser.getByteFrequencyData(dataArray);
   let sum = 0;       
   for (let b = 0, b < bufferLength; b++) {
    sum += dataArray[b];
    }                                 
  currentVolume = sum / bufferLength;
 
  // This calls analyze again on the next animation frame
request Animation Frame(analyze);
  }
      analyze();
} catch (err) {
  console.error('Microphone access blocked:', err);
     }
}

export function  detectWaves() {

const amplitude = currentVolume;
}

export function draw() {
}









  
