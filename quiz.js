// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if the user selected an option
    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare the user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green"; // Optional: Change feedback color to green
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red"; // Optional: Change feedback color to red
        }
    } else {
        // If no option is selected
        feedback.textContent = "Please select an answer.";
        feedback.style.color = "orange"; // Optional: Change feedback color to orange
    }
}

// Add an event listener to the "Submit Answer" button
const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
