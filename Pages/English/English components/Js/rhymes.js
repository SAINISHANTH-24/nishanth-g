const audioPlayer = document.getElementById("audio-player");

// Array of rhyme audio file paths
const rhymes = [
    "../../../../asset/English/Rhymes/twinkle-twinkle-little-star.mp3",
    "../../../../asset/English/Rhymes/baa-baa-black-sheep.mp3",
    "../../../../asset/English/Rhymes/london-bridge-is-falling-down.mp3",
    "../../../../asset/English/Rhymes/Ringa-Ringa-Roses.mp3",
    "../../../../asset/English/Rhymes/rain-rain-go-away.mp3",
    "../../../../asset/English/Rhymes/the-wheels-on-the-bus.mp3",
    "../../../../asset/English/Rhymes/jingle-bells.mp3",
    "../../../../asset/English/Rhymes/five-little-monkeys.mp3",
    "../../../../asset/English/Rhymes/jack-and-jill.mp3",
    "../../../../asset/English/Rhymes/johny-johny-yes-papa.mp3"
];

// Function to play the selected rhyme
function playRhyme(index) {
    if (!audioPlayer.paused) {
        audioPlayer.pause(); // Stop the current rhyme
    }
    audioPlayer.src = rhymes[index]; // Load the selected rhyme
    audioPlayer.play(); // Play the new rhyme
}
