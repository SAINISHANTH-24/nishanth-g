const playButton = document.getElementById("playButton");
const audio = document.getElementById("audio");
const tamilSpans = document.querySelectorAll("#tamilSong span");

const timings = [
    0, 2.5, 2, 2.5, 3, 3.5, 4, 4.5, 
    5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 
    9, 9.5, 10, 10.5, 11, 11.5, 12, 12.5, 
    13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17
];

playButton.addEventListener("click", () => {
    audio.play();
    highlightWords();
});

function highlightWords() {
    let currentIndex = 0;

    function highlightNextWord() {
        if (currentIndex > 0) {
            tamilSpans[currentIndex - 1].classList.remove("highlight");
        }

        if (currentIndex < tamilSpans.length) {
            tamilSpans[currentIndex].classList.add("highlight");
            currentIndex++;

            setTimeout(
                highlightNextWord,
                (timings[currentIndex] - timings[currentIndex - 1]) * 1000
            );
        }
    }

    highlightNextWord();
}
