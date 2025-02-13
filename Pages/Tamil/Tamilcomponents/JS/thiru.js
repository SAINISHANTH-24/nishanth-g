const audioPlayer = document.getElementById('audio-player');
const kuralText = document.getElementById('kural-text');
const prevKuralButton = document.getElementById('prev-kural');
const nextKuralButton = document.getElementById('next-kural');
const playAudioButton = document.getElementById('play-audio');

let currentKuralIndex = 0;

function updateKural() {
    kuralText.textContent = kurals[currentKuralIndex];
    audioPlayer.currentTime = currentKuralIndex * 5; // ஒவ்வொரு குறள் 5 வினாடி
}

prevKuralButton.addEventListener('click', () => {
    if (currentKuralIndex > 0) {
        currentKuralIndex--;
        updateKural();
    }
});

nextKuralButton.addEventListener('click', () => {
    if (currentKuralIndex < kurals.length - 1) {
        currentKuralIndex++;
        updateKural();
    }
});

playAudioButton.addEventListener('click', () => {
    audioPlayer.play();
});

updateKural();
