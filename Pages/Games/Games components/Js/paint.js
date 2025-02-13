
const colorPicker = document.getElementById('colorPicker');
const clearButton = document.getElementById('clearButton');
const canvas = document.getElementById('paintCanvas');
const ctx = canvas.getContext('2d');
const pictureSelector = document.getElementById('pictureSelector');

let isPainting = false;
let selectedColor = colorPicker.value;


canvas.width = 600;
canvas.height = 400;

canvas.addEventListener('mousedown', startPainting);
canvas.addEventListener('mouseup', stopPainting);
canvas.addEventListener('mousemove', draw);

canvas.addEventListener('touchstart', startPainting);
canvas.addEventListener('touchend', stopPainting);
canvas.addEventListener('touchmove', draw);

colorPicker.addEventListener('input', (e) => {
    selectedColor = e.target.value;
});


clearButton.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});


pictureSelector.addEventListener('click', (e) => {
    if (e.target.classList.contains('selectable')) {
        const img = new Image();
        img.src = e.target.src;
        img.onload = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };
    }
});

function startPainting(e) {
    isPainting = true;
    draw(e);
}

function stopPainting() {
    isPainting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!isPainting) return;

    const rect = canvas.getBoundingClientRect();
    const x = (e.clientX || e.touches[0].clientX) - rect.left;
    const y = (e.clientY || e.touches[0].clientY) - rect.top;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = selectedColor;

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}
