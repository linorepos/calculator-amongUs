export function getScreenValue() {
  return document.getElementById('screen').value.trim();
}

export function setScreenValue(value) {
  document.getElementById('screen').value = value;
}

export function addToScreen(value) {
  document.getElementById('screen').value += value;
}

export function clearScreen() {
  document.getElementById('screen').value = '';
}