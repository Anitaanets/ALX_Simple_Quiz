function checkAnswer() {
  // Define the correct answer
  const correctAnswer = "4";

  // Get the user's selected answer
  const userAnswerElement = document.querySelector('input[name="quiz"]:checked');
  const feedbackElement = document.getElementById("feedback");

  if (userAnswerElement) {
      // Get the value of the selected answer
      const userAnswer = userAnswerElement.value;

      // Check if the user's answer matches the correct answer
      if (userAnswer === correctAnswer) {
          feedbackElement.textContent = "Correct! Well done.";
          feedbackElement.style.color = "green";
      } else {
          feedbackElement.textContent = "That's incorrect. Try again!";
          feedbackElement.style.color = "red";
      }
  } else {
      // Handle the case where no answer is selected
      feedbackElement.textContent = "Please select an answer before submitting!";
      feedbackElement.style.color = "orange";
  }
}

// Add an event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
