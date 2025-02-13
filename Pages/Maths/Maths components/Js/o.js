function playAudio(id) {
    const audioElement = document.getElementById(id);
    audioElement.currentTime = 0; // Reset to the beginning
    audioElement.play();
  }
  