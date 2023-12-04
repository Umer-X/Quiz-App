nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayResult();
    }
});