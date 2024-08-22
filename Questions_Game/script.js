// here are the variables
let questions = [ // The array of questions for our quiz game.
  { q: "The sky is blue.", a: "t" },
  { q: "There are 365 days in a year.", a: "t" },
  { q: "There are 42 ounces in a pound.", a: "f" },
  { q: "The Declaration of Independence was created in 1745.", a: "f" },
  { q: "Bananas are vegetables.", a: "f" }
];
let score = 0; // We start the game with a score of 0.
let questionIndex = 0; // Variable to hold the index of current question.


// here are the functions
function renderQuestion() { // Function to render questions.
  if (questionIndex <= (questions.length - 1)) {
    // If there are still more questions, render the next one.
    document.querySelector("#question").innerText = questions[questionIndex].q;
  } else {
    // If there aren't any more questions, render the end game screen.
    document.querySelector("#question").innerText = "Game Over!";
    document.querySelector("#score").innerText = "Final Score: " + score + " out of " + questions.length;
  }
}

function updateScore() { // Function that updates the score...
  document.querySelector("#score").innerText = "Score: " + score;
}

// the main process of the code is as follows
// Calling functions to start the game.
renderQuestion();
updateScore();

// When the user presses a button, it will run the following function with answer being 't' or 'f' depending on the button pressed...
function answerQuestion(answer) {

  // If they guess the correct answer, increase and update score, alert them they got it right.
  if (answer === questions[questionIndex].a) {
    score++;
    alert("You got the correct answer!");
    console.log(score);

    // If wrong, alert them they are wrong.
  } else {
    alert("You got this question wrong!");
    console.log(score);
    }
  // Increment the questionIndex variable and call the renderQuestion function.
  questionIndex++;
  renderQuestion();
  

  // If there are no more questions, stop the function.
  return;
}
