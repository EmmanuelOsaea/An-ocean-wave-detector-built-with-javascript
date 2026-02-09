import { detectWaves, stopDetection } from './waveDetector.js';
import { predictIncomingWave } from './predictor.js';

const beginBtn = document.getElementById('beginBtn');
const statusDiv = document.getElementById('status');
const canvas = document.getElementById('waveCanvas');
const ctx = document.getContext('2d');

let detectionActive = false;

beginBtn.addEventListener('click', () => {
  if (!detectionActive) {
    statusDiv.textcontent = 'Status: Detecting waves...';
    detectWaves(ctx);
    beginPredictionLoop();
    beginBtn.textContent = 'End Detection';
  }  else {
  statusDiv.textContent = 'Status: Ended';
  endDetection();
beginBtn.textContent = 'Begin Detection';
  }
  detectionActive = !detectionActive;
});

let predictionInterval;

} else {
 statusDiv.textContent = 'Status: Ended';
  stop.Detection()
  
  function StopPredictionLoop() {
 clearInterval(predictionInterval);
  amplified Buffer = [];
  }
