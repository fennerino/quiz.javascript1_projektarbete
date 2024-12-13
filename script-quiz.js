const proceedBtn = document.querySelector("#popup-confirm #proceed-btn");
proceedBtn.addEventListener("click", (e) => {
	e.preventDefault();
	let popupDiv = document.querySelector(".popup-div");
	popupDiv.style.display = "none";

	let questionDivs = document.querySelectorAll(".question-div");
	questionDivs.forEach((div, index) => {
		if (index === 0) {
			div.style.display = "block";
		} else {
			div.style.display = "none";
		}
	});
});

const questions = [
	"Is JavaScript a case-sensitive language?", // answer: "Yes"
	"Can JavaScript be used for both frontend and backend development?", // answer: "Yes"
	"Does JavaScript support classes?", // answer: "Yes"
	"Is JavaScript the same as Java?", // answer: "No"
	"Can you declare a variable in JavaScript using the keyword 'var'?", // answer: "Yes"
	"Do all JavaScript functions have to return a value?", // answer: "No"
	"Is 'undefined' a reserved keyword in JavaScript?", // answer: "Yes"
	"Can JavaScript run outside of a web browser?", // answer: "Yes"
	"Does JavaScript support strict typing like TypeScript?", // answer: "No"
	"Is 'const' used to declare variables that can be reassigned?", // answer: "No",
];
const correctAnswers = [
	"true",
	"true",
	"true",
	"false",
	"true",
	"false",
	"true",
	"true",
	"false",
	"false",
];
let correctArray = [];
let incorrectArray = [];
let fieldsetNodes = document.querySelectorAll("fieldset .question");
let fieldsetArray = Array.from(fieldsetNodes);
let submitBtn = document.querySelector("#submitBtn");
// submitBtn.style.display = "none";  // TEMPLORARILY COMMENTED -

// Loop through questions, forEach arrow-function //
questions.forEach((question, index) => {
	fieldsetArray[index].innerText = question;
	index++;
	console.log(questions[2]); // TEMP //
});

let lockInBtn = document.querySelectorAll("fieldset .lockIn-btn");
let lockinBtns = Array.from(lockInBtn);

// #region - Loop through lockinBtns, forEach arrow-function //
lockinBtns.forEach((button, index) => {
	button.textContent = "Lock in answer";

	//eventListener "click" arrow function
	button.addEventListener("click", (e) => {
		e.preventDefault();
		let questionDiv = button.closest(".question-div");

		let selectedRadio = questionDiv.querySelector(
			"input[type='radio']:checked"
		);

		if (!selectedRadio) {
			alert("Make a selection before locking in your answer.");
			return;
		} else if (selectedRadio) {
			let userinput = selectedRadio.value;
			let correctanswer = correctAnswers[index];

			if (userinput === correctanswer) {
				correctArray.push(index + 1);
			} else {
				incorrectArray.push(index + 1);
				console.log("Question " + (index + 1) + " incorrect.");
			}

			let prevQuestion = e.target.parentElement.parentElement;
			prevQuestion.style.opacity = "0.5";
			let activeQuestion = prevQuestion.nextElementSibling;
			activeQuestion.style.display = "block";
			activeQuestion.style.opacity = "1";
			let nextQuestion = activeQuestion.nextElementSibling;
		}

		// Loop through radio-btns' value, forEach arrow-function //
		let radiobuttons = questionDiv
			.querySelectorAll("input[type='radio']")
			.forEach((radio) => {
				radio.disabled = true;
			});

		button.disabled = true;
		button.innerText = "Locked in";
		button.style.color = "grey";
		button.style.fontStyle = "italic";

		if (index === questions.length) {
			// index === 10
			submitBtn.style.display = "block";
		}
	});
});
//#endregion

let quizResults = document.querySelector("#quiz-results");
// quizResults.style.backgroundColor = "red";
quizResults.style.display = "none";

//MAKE INTO POPUP-WINDOW:
submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	quizResults.style.display = "block"; // TEMP

	let resultsP = document.querySelectorAll("#quiz-results p");
	resultsP[0].append(correctArray.length + " correct answers");
	resultsP[1].append(incorrectArray.length + " incorrect answers");

	let resultsTitle = document.querySelector("#quiz-results h2");
	resultsTitle.append("Your results are...");

	let score = correctArray.length;
	let totalQuestions = correctAnswers.length;
	let percentage = Math.round((score / totalQuestions) * 100 * 10) / 10;

	let percentageRoundedUp = Math.round(percentage) + "%"; // no decimals
	resultsP[2].append(
		"Your score: " + correctArray.length + "/" + totalQuestions
	);
	resultsP[2].append(" (" + percentageRoundedUp + "%)");

	if (percentage < 50) {
		resultsP[2].style.color = "red";
		resultsP[2].style.fontStyle = "italic";
		resultsP[2].style.fontStyle = "bold";
		resultsP[2].innerHTML += "</br> Failed";
	} else if (percentage <= 75) {
		resultsP[2].style.color = "orange";
		resultsP[2].style.fontStyle = "italic";
		resultsP[2].innerHTML += "</br> Passable </br>";
	} else {
		resultsP[2].style.color = "green";
		resultsP[2].style.fontStyle = "italic";
		resultsP[2].innerHTML += "</br> nicely done!";
	}

	console.log(
		score,
		totalQuestions,
		resultsP[0],
		resultsP[1],
		resultsP[2],
		percentage,
		percentageRoundedUp
	);
});

// let score = 0;
// let totalQuestions = 15;
// let percentage = Math.round((score / totalQuestions) * 100 * 10) / 10;
// let percentage = ((score / totalQuestions) * 100).toFixed(1);
// let percentageRoundedUp = (Math.round(percentage * 10) / 10) + "%";  // 1 decimal
// let percentageRoundedUp = Math.round(percentage) + "%"; // no decimals
