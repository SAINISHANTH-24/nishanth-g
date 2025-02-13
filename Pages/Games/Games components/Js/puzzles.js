const puzzleContainer = document.getElementById("puzzle-container");
const shuffleButton = document.getElementById("shuffle-btn");

// Create a counter to track moves
const turnCounter = document.createElement("p");
turnCounter.textContent = "Turns: 0";
document.querySelector(".game-container").appendChild(turnCounter);

let tiles = Array.from({ length: 15 }, (_, i) => i + 1).concat(null);
let turns = 0; // Initialize the move counter

function createTiles() {
    puzzleContainer.innerHTML = "";
    tiles.forEach((number) => {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        if (number) {
            tile.textContent = number;
        } else {
            tile.classList.add("empty");
        }
        puzzleContainer.appendChild(tile);
    });
}

function shuffleTiles() {
    for (let i = tiles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [tiles[i], tiles[j]] = [tiles[j], tiles[i]];
    }
    turns = 0; // Reset the turn counter when shuffled
    updateTurnCounter();
    createTiles();
}

function moveTile(index) {
    const emptyIndex = tiles.indexOf(null);
    const validMoves = [index - 1, index + 1, index - 4, index + 4];

    if (validMoves.includes(emptyIndex)) {
        [tiles[index], tiles[emptyIndex]] = [tiles[emptyIndex], tiles[index]];
        turns++; // Increment the move counter
        updateTurnCounter();
        createTiles();
    }
}

function updateTurnCounter() {
    turnCounter.textContent = `Turns: ${turns}`;
}

puzzleContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tile") && !e.target.classList.contains("empty")) {
        const index = Array.from(puzzleContainer.children).indexOf(e.target);
        moveTile(index);
    }
});

shuffleButton.addEventListener("click", shuffleTiles);

// Initialize the game
createTiles();
