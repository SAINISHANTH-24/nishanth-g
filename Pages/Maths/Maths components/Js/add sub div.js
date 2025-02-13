let correctAnswer = 0;
let operation = "";

function startQuiz(op) {
    operation = op;
    document.getElementById("quiz-title").innerText =
        op.charAt(0).toUpperCase() + op.slice(1) + " Quiz";
    generateQuestion();
    document.getElementById("quiz-area").classList.remove("hidden");
}

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;

    let question = "";
    if (operation === "addition") {
        question = `${num1} + ${num2}`;
        correctAnswer = num1 + num2;
    } else if (operation === "subtraction") {
        question = `${num1} - ${num2}`;
        correctAnswer = num1 - num2;
    } else if (operation === "multiplication") {
        question = `${num1} × ${num2}`;
        correctAnswer = num1 * num2;
    } else if (operation === "division") {
        const dividend = num1 * num2;
        question = `${dividend} ÷ ${num1}`;
        correctAnswer = num2;
    }

    document.getElementById("question").innerText = question;
    document.getElementById("answer").value = "";
    document.getElementById("feedback").innerText = "";
}

function checkAnswer() {
    const userAnswer = parseInt(document.getElementById("answer").value, 10);
    const feedback = document.getElementById("feedback");

    if (userAnswer === correctAnswer) {
        feedback.innerText = "Correct! Well done!";
        feedback.style.color = "green";
    } else {
        feedback.innerText = `Wrong! The correct answer is ${correctAnswer}.`;
        feedback.style.color = "red";
    }

    setTimeout(generateQuestion, 2000); 
}
