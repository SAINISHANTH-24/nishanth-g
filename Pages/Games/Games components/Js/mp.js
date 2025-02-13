const songs = [
    { title: "Story 1", src: "1.mp3", image: "1.png" },
    { title: "Story 2", src: "2.mp3", image: "2.png" },
    { title: "Story 3", src: "songs/story3.mp3", image: "images/story3.png" },
    { title: "Story 4", src: "songs/story4.mp3", image: "images/story4.png" },
    { title: "Story 5", src: "songs/story5.mp3", image: "images/story5.png" },
    { title: "Story 6", src: "songs/story6.mp3", image: "images/story6.png" },
    { title: "Story 7", src: "songs/story7.mp3", image: "images/story7.png" },
    { title: "Story 8", src: "songs/story8.mp3", image: "images/story8.png" },
    { title: "Story 9", src: "songs/story9.mp3", image: "images/story9.png" },
    { title: "Story 10", src: "songs/story10.mp3", image: "images/story10.png" }
  ];
  
  let currentSongIndex = 0;
  const audio = new Audio(songs[currentSongIndex].src);
  const storyImage = document.getElementById("story-image");
  const playPauseBtn = document.getElementById("play-pause-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const progress = document.getElementById("progress");
  const currentTime = document.getElementById("current-time");
  const totalTime = document.getElementById("total-time");
  
  // Load song and image
  function loadSong() {
    audio.src = songs[currentSongIndex].src;
    storyImage.src = songs[currentSongIndex].image;
    audio.play();
    playPauseBtn.textContent = "⏸ Pause";
  
    // Reset progress bar and time display
    progress.value = 0;
    currentTime.textContent = "0:00";
    totalTime.textContent = "0:00";
  
    // Update total time when metadata is loaded
    audio.addEventListener("loadedmetadata", () => {
      totalTime.textContent = formatTime(audio.duration);
    });
  }
  
  // Play/Pause functionality
  playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸ Pause";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶ Play";
    }
  });
  
  // Previous song
  prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong();
  });
  
  // Next song
  nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
  });
  
  // Update progress bar and current time
  audio.addEventListener("timeupdate", () => {
    const progressPercent = (audio.currentTime / audio.duration) * 100;
    progress.value = progressPercent;
    currentTime.textContent = formatTime(audio.currentTime);
  });
  
  // Set progress on click
  progress.addEventListener("input", () => {
    const seekTime = (progress.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  });
  
  // Format time (MM:SS)
  function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return '${minutes}:${seconds.toString().padStart(2, "0")}';
  }
  
  // Automatically play next song
  audio.addEventListener("ended", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong();
  });
  
  // Load first song on page load
  loadSong();