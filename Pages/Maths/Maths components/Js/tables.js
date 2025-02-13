document.getElementById('generate-button').addEventListener('click', function () {
    const tableNumber = parseInt(document.getElementById('table-number').value);
    const tableContainer = document.getElementById('table-container');
    const quizContainer = document.getElementById('quiz-container');
    const quizDiv = document.getElementById('quiz');
    const resultContainer = document.getElementById('result-container');
    
    if (isNaN(tableNumber)) {
        alert("Please enter a valid number.");
        return;
    }

    // Generate Math Table
    tableContainer.innerHTML = `<h2>Math Table of ${tableNumber}</h2>`;
    let tableHTML = '<ul>';
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<li>${tableNumber} x ${i} = ${tableNumber * i}</li>`;
    }
    tableHTML += '</ul>';
    tableContainer.innerHTML += tableHTML;

    // Generate Quiz
    quizDiv.innerHTML = '';
    for (let i = 1; i <= 10; i++) {
        const question = `${tableNumber} x ${i} = `;
        quizDiv.innerHTML += `
            <div>
                <label>${question}</label>
                <input type="number" id="answer-${i}" placeholder="Your answer">
            </div>`;
    }
    quizContainer.classList.remove('hidden');
    resultContainer.classList.add('hidden');
});

document.getElementById('submit-button').addEventListener('click', function () {
    const tableNumber = parseInt(document.getElementById('table-number').value);
    let correctAnswers = 0;

    for (let i = 1; i <= 10; i++) {
        const userAnswer = parseInt(document.getElementById(`answer-${i}`).value);
        const correctAnswer = tableNumber * i;
        if (userAnswer === correctAnswer) {
            correctAnswers++;
        }
    }

    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `You got ${correctAnswers} out of 10 correct!`;
    resultContainer.classList.remove('hidden');
});
