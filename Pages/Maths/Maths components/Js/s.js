document.addEventListener("DOMContentLoaded", () => {
  const shapes = document.querySelectorAll(".shape");

  shapes.forEach(shape => {
    shape.addEventListener("click", () => {
      const audioFile = shape.getAttribute("data-audio");
      const audio = new Audio(audioFile);
      audio.play();
    });
  });
});
