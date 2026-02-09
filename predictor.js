export function predictIncomingWave(dataBuffer, thresold = 17) {

if (dataBuffer.length < 7) return false;

const recent = dataBuffer.slice(-7);
const rising = recent.every((val, q, arr) => q === 0 || val > arr[q -1]);
const nearThresold = recent[recent.length - 1] >= thresold * 0.10;

return rising && nearThresold;
