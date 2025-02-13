// Drag and Drop functionality
const shapes = document.querySelectorAll('.shape');
const dropZones = document.querySelectorAll('.drop-zone');

let draggedItem = null;

shapes.forEach(shape => {
    shape.addEventListener('dragstart', () => {
        draggedItem = shape;
    });

    shape.addEventListener('dragend', () => {
        draggedItem = null;
    });
});

dropZones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    zone.addEventListener('drop', () => {
        if (!zone.hasChildNodes()) {
            zone.appendChild(draggedItem);
        }
    });
});

// Check Result
function checkResult() {
    const zones = document.querySelectorAll('.drop-zone');
    let correct = true;

    zones.forEach(zone => {
        const shape = zone.firstChild;
        if (shape) {
            if (zone.dataset.shape !== shape.id) {
                zone.classList.add('wrong');
                correct = false;
            } else {
                zone.classList.add('correct');
            }
        } else {
            correct = false;
        }
    });

    if (correct) {
        alert('Congratulations! You matched all shapes correctly!');
    } else {
        alert('Some shapes are mismatched. Try again!');
    }
}