// Quiz Questions
const questions = [
	{
		question: "What does the 'typeof' operator in JavaScript return?",
		options: [
		  "The data type of a variable",
		  "The value of a variable",
		  "The size of a variable",
		  "The name of a variable"
		],
		answer: 0, // Correct answer index (0 for "The data type of a variable")
	  },
	  {
		question: "Which of the following is NOT a JavaScript framework or library?",
		options: [
		  "React",
		  "Angular",
		  "Vue",
		  "Java"
		],
		answer: 3, // Correct answer index (3 for "Java")
	  },
	  {
		question: "Which of the following is correct about JavaScript?",
		options: [
		  "JavaScript is an Object-Based language",
		  " JavaScript is Assembly-language",
		  "JavaScript is an Object-Oriented language",
		  "avaScript is a High-level language"
		],
		answer: 0, // Correct answer index (0 for "<script src='script.js'></script>")
	  },
	  {
		question: "Which of the following is used to declare a variable in JavaScript?",
		options: [
		  "var",
		  "let",
		  "const",
		  "All of the above"
		],
		answer: 3, // Correct answer index (3 for "All of the above")
	  },
  ];
  
  let currentQuestionIndex = 0;
  let correctAnswers = 0;
  let incorrectAnswers = 0;
  
  // DOM Elements
  const questionContainer = document.getElementById("question-container");
  const submitButton = document.getElementById("submit-btn");
  const resultPopup = document.getElementById("result-popup");
  const popupTitle = document.getElementById("popup-title");
  const popupMessage = document.getElementById("popup-message");
  const popupCloseButton = document.getElementById("popup-close-btn");
  const leaderboardBody = document.getElementById("leaderboard-body");
  
  // Load question
  function loadQuestion() {
	const question = questions[currentQuestionIndex];
	let optionsHTML = "";
	question.options.forEach((option, index) => {
	  optionsHTML += `<option value="${index}">${option}</option>`;
	});
	questionContainer.innerHTML = `
	  <h2>${question.question}</h2>
	  <select id="answer-select">
		${optionsHTML}
	  </select>
	`;
  }
  
  
  // Show popup
function showPopup(title, message) {
	const correctQuestions = correctAnswers;
	const incorrectQuestions = incorrectAnswers;
	 const totalQuestions = questions.length;
  const passingScore = Math.floor(totalQuestions * 0.7); // Assuming passing score is 70% of total questions
  
	popupTitle.textContent = title;
	popupMessage.innerHTML = `
    <div class="popup-message-item">Total Right question: ${correctQuestions}</div>
    <div class="popup-message-item"> Total Wrong Question:${incorrectQuestions}</div>
    <div class="popup-result-item">Final Result: ${correctQuestions >= passingScore ? 'Pass' : 'Fail'}</div>
  `;
	resultPopup.style.display = "block";
  }
  
  // Hide popup
  function hidePopup() {
	resultPopup.style.display = "none";
  }
  
  // Submit answer
  function submitAnswer() {
	const answerSelect = document.getElementById("answer-select");
	const userAnswerIndex = answerSelect.selectedIndex;
	if (userAnswerIndex === -1) {
	  showPopup("Error", "Please select an answer.");
	  return;
	}
  
	const question = questions[currentQuestionIndex];
	const userAnswer = userAnswerIndex === question.answer;
  
	if (userAnswer) {
	  correctAnswers++;
	  showPopup("Score", "Your answer is correct!");
	} else {
	  incorrectAnswers++;
	  showPopup("Score", "Your answer is incorrect.");
	}
  
	currentQuestionIndex++;
	answerSelect.selectedIndex = -1;
  
	if (currentQuestionIndex < questions.length) {
	  loadQuestion();
	} else {
		const statusContainer = document.createElement("div");
		statusContainer.textContent = `Correct: ${correctAnswers} | Incorrect: ${incorrectAnswers}`;
		statusContainer.style.marginTop = "10px";
		submitButton.parentNode.insertBefore(statusContainer, submitButton.nextSibling);
	
		showLeaderboard();
	}
  }
  
  // Show leaderboard
  function showLeaderboard() {
	questionContainer.style.display = "none";
	submitButton.style.display = "none";
	leaderboardContainer.style.display = "block";
  
	const newRow = leaderboardBody.insertRow();
	const nameCell = newRow.insertCell();
	const correctCell = newRow.insertCell();
	const incorrectCell = newRow.insertCell();
	
  
	nameCell.textContent = "Player Name";
	correctCell.textContent = correctAnswers;
	incorrectCell.textContent = incorrectAnswers;
	overallResult.textContent = `You answered ${correctAnswers} correctly and ${incorrectAnswers} incorrectly.`;
  }
  
  // Event listeners
  submitButton.addEventListener("click", submitAnswer);
  popupCloseButton.addEventListener("click", hidePopup);
  
  // Start the quiz
  loadQuestion();
  