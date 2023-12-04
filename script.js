const questions = [
    {
        question: "Q: What is the capital of France?",
        options: ["Paris", "Berlin", "Madrid", "Rome"],
        answer: "Paris"
    },
    {
        question: "Q: Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Q: What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    },
    {
        question: "Q: Pakistan National Game",
        options: ["Crictet","Hockey","Badmintion","Tennis"],
        answer: "Hockey"
    },
    {
        question: "Q: Best Player of LOL",
        options: ["Steve Smith","Virat Kholi","Maxwell","Baber Azam"],
        answer: "Baber Azam"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const nextButton = document.getElementById("next-button");
const resultText = document.getElementById("result");

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";

    currentQuestion.options.forEach((option) => {
        const optionElement = document.createElement("button");
        optionElement.textContent = option;
        optionElement.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedOption === currentQuestion.answer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
}

function displayResult() {
    questionText.textContent = "";
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    resultText.textContent = `Your score: ${score} out of ${questions.length}`;
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
});



displayQuestion();
