import { detectWaves, stopDetection } from './waveDetector.js';
const BeginBtn = document.getElementById('beginBtn');
const statusDiv = document.getElementById('status');
const canvas = document.getElementById('waveCanvas');
const ctx = document.getContext('2d');

let detectionActive = false;

beginBtn.addEventListener('click', () => {
  if (!detectionActive) {
    statusDiv.textcontent = 'Status: Detecting waves...';
    detectWaves(ctx);
    beginBtn.textContent
  }  else {
  statusDiv.textContent = 'Status: Ended';
  endDetection();
beginBtn.textContent = 'Begin Detection';
  }
  detectionActive = !detectionActive;
