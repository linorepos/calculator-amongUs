const buttonSound = document.getElementById('buttonSound');
buttonSound.volume = 0.25;

const backgroundMusic = document.getElementById('backgroundMusic');
backgroundMusic.volume = 0.18;

export function playButtonSound() {
  buttonSound.currentTime = 0;
  buttonSound.play();
}