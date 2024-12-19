const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: "4"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = questions[currentQuestion].question;

    optionsElement.innerHTML = '';
    questions[currentQuestion].options.forEach(option => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.onclick = () => checkAnswer(option);
        optionsElement.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    questionElement.textContent = `You scored ${score} out of ${questions.length}`;
    optionsElement.innerHTML = '';
}

document.getElementById("next-btn").onclick = loadQuestion;

loadQuestion();
