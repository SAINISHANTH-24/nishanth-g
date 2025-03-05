function playAudioAndAnimate(letterId) {
    // Play Audio
    const audio = document.getElementById(letterId);
    if (audio) {
      audio.currentTime = 0; 
      audio.play();
    }
  
    // Animate Image
    const image = document.querySelector(`#${letterId}`).parentElement.querySelector('.image');
    if (image) {
      image.classList.add('animate'); 
      setTimeout(() => {
        image.classList.remove('animate'); 
      }, 1000); 
    }
  }

