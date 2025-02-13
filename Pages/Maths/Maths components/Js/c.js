document.addEventListener("DOMContentLoaded", () => {
  const colors = document.querySelectorAll(".color");

  colors.forEach(color => {
    color.addEventListener("click", () => {
      // Add playful animations
      color.classList.add("clicked");

      // Remove animation class after it finishes
      setTimeout(() => {
        color.classList.remove("clicked");
      }, 1000);

      // Play corresponding audio
      const audioFile = color.getAttribute("data-audio");
      const audio = new Audio(audioFile);
      audio.play();
    });
  });
});
