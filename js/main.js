import { playButtonSound } from './audio.js';
import { getScreenValue, setScreenValue, addToScreen, clearScreen as clearScreenDOM } from './dom.js';
import { calculate } from './calculator.js';

export function addElement(value) {
  playButtonSound();
  addToScreen(value);
}

export function clearScreen() {
  playButtonSound();
  clearScreenDOM();
}

export function performCalculation() {
  playButtonSound();
  const operation = getScreenValue();
  const result = calculate(operation);
  setScreenValue(result);
}

window.addElement = addElement;
window.clearScreen = clearScreen;
window.calculate = performCalculation;