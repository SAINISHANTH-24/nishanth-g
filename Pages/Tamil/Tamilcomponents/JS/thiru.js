document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".adhigaram-btn");
    const image = document.getElementById("kural-image");
    const audio = document.getElementById("kural-audio");
    const displayBox = document.getElementById("display-box");
    const playAudioBtn = document.getElementById("play-audio-btn");

    let currentAudio = null;

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            let id = this.getAttribute("data-id");

            // Update Image & Audio Source
            image.src = `assets/images/${id}.png`;
            audio.src = `assets/audio/${id}.mp3`;

            // Show display box
            displayBox.style.display = "block";

            // Stop previous audio if playing
            if (currentAudio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
            }
            currentAudio = audio;
        });
    });

    // Play audio when button is clicked
    playAudioBtn.addEventListener("click", function() {
        if (currentAudio) {
            currentAudio.play();
        }
    });
});
