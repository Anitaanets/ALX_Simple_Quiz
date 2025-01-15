// Function to check the user's answer
function checkAnswer() {
  // The correct answer
  const correctAnswer = "4";

  // Get the user's selected answer
  const userAnswer = document.querySelector('input[name="quiz"]:checked');

  // Get the feedback element
  const feedbackElement = document.getElementById("feedback");

  if (userAnswer) {
      // Check if the user's answer matches the correct answer
      if (userAnswer.value === correctAnswer) {
          feedbackElement.textContent = "Correct! Well done.";
          feedbackElement.style.color = "green"; // Optional: Make feedback visually clear
      } else {
          feedbackElement.textContent = "That's incorrect. Try again!";
          feedbackElement.style.color = "red"; // Optional: Make feedback visually clear
      }
  } else {
      // Handle case where no answer is selected
      feedbackElement.textContent = "Please select an answer before submitting!";
      feedbackElement.style.color = "orange"; // Optional: Highlight missing input
  }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
