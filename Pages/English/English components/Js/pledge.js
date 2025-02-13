const playButton = document.getElementById("playButton");
const audio = document.getElementById("audio");
const pledgeSpans = document.querySelectorAll("#pledge span");

// Timings array in seconds for each word
const timings = [
    0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 
    6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12,
    12.5, 13, 13.5, 14, 14.5, 15, 15.5, 16, 16.5, 17, 17.5, 
    18, 18.5, 19, 19.5, 20, 20.5, 21, 21.5, 22, 22.5, 23, 23.5, 
    24, 24.5, 25, 25.5, 26, 26.5, 27, 27.5, 28, 28.5, 29, 29.5, 30, 30.5, 31, 31.5, 32, 32.5, 33, 33.5, 34, 34.5, 35
];

playButton.addEventListener("click", () => {
    audio.play();
    highlightWords();
});

function highlightWords() {
    let currentIndex = 0;

    function highlightNextWord() {
        if (currentIndex > 0) {
            pledgeSpans[currentIndex - 1].classList.remove("highlight");
        }

        if (currentIndex < pledgeSpans.length) {
            pledgeSpans[currentIndex].classList.add("highlight");
            currentIndex++;

            // Schedule the next highlight based on the timings array
            setTimeout(highlightNextWord, (timings[currentIndex] - timings[currentIndex - 1]) * 1000);
        }
    }

    highlightNextWord();
}
