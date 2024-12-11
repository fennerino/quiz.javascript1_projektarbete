
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

	// #region Trial n Error
		// let trials = document.querySelector("#quiz-form").children;
		// quizDivs = Array.from(trials);
		// console.log(trials, quizDivs);

	// let parentDiv = e.target.parentElement.parentElement;
	// console.log(parentDiv)
	// let nextDiv = parentDiv.nextElementSibling;
	// console.log(nextDiv);
	//#endregion
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
		submitBtn.style.display = "none";

// loop through questions, forEach arrow-function //
questions.forEach((question, index) => {
	fieldsetArray[index].innerText = question;
	index++;
	console.log(index, question);
});

let lockInBtn = document.querySelectorAll("fieldset .lockIn-btn");
let lockinBtns = Array.from(lockInBtn);

// #region // loop through lockinBtns, forEach arrow-function //
lockinBtns.forEach((button, index) => {
	button.textContent = "Lock in answer";

	//eventListener "click" arrow function
	button.addEventListener("click", (e) => {
		e.preventDefault();

		// console.log(e.target.lastChild);
		let questionDiv = button.closest(".question-div");
    // console.log(questionDiv)

		let selectedRadio = questionDiv.querySelector(
			"input[type='radio']:checked"
		);
		if (!selectedRadio) {
			alert("Make a selection before locking in your answer.");
			return;
		} 
		else if (selectedRadio) {
			let userinput = selectedRadio.value;
			let correctanswer = correctAnswers[index];
			console.log(index + 1, "User answer: " + userinput);
			console.log(index + 1, "Correct answer: " + correctanswer);

			if (userinput === correctanswer) {
				correctArray.push(index + 1);
				console.log(correctArray);
			} 
			else {
				incorrectArray.push(index + 1);
        console.log(incorrectArray);
				console.log("Question " + (index + 1) + " incorrect.");
			}

			let prevQuestion = e.target.parentElement.parentElement;
			let activeQuestion = prevQuestion.nextElementSibling;
			let nextQuestion = activeQuestion.nextElementSibling;
			console.log(prevQuestion, activeQuestion, nextQuestion);

			activeQuestion.style.display = "block";
			activeQuestion.style.opacity = "1";
			prevQuestion.style.opacity = "0.5";
		}

		// loop through radio-btns' value, forEach arrow-function //
		let radiobuttons = questionDiv
			.querySelectorAll("input[type='radio']")
			.forEach((radio) => {
				radio.disabled = true;
			});

		button.disabled = true;
		button.innerText = "Locked in";
		button.style.color = "grey";
		button.style.fontStyle = "italic";

		if (index === questions.length) { // index === 10
			submitBtn.style.display = "block";
		}
	});
});
//#endregion

let quizResults = document.querySelector("#quiz-results");
quizResults.style.backgroundColor = "red";
quizResults.style.display = "none";

// quizResults.style.display = "block"; // TEMP

//#region 
		// let resultsP = document.querySelectorAll("#quiz-results p");
		// // let resultsCorrect = document.querySelector("#quiz-results p");
		// // let resultsIncorrect = document.querySelector("#quiz-results p");
		// resultsP[0].append(correctArray.length + " correct answers");
		// resultsP[1].append(incorrectArray.length + " incorrect answers");

		// let resultsTitle = document.querySelector("#quiz-results h2");
		// resultsTitle.append("your results are...");
		// resultsCorrect.append(correctArray.length + " correct answers");
		// resultsIncorrect.append(incorrectArray.length + " incorrect answers");

		// console.log(quizResults);
//#endregion


//MAKE INTO POPUP-WINDOW:
	submitBtn.addEventListener("click", (e) => {
		e.preventDefault();
		let resultsP = document.querySelectorAll("#quiz-results p");
		// let resultsCorrect = document.querySelector("#quiz-results p");
		// let resultsIncorrect = document.querySelector("#quiz-results p");
		resultsP[0].append(correctArray.length + " correct answers");
		resultsP[1].append(incorrectArray.length + " incorrect answers");
		let resultsTitle = document.querySelector("#quiz-results h2");
		resultsTitle.append("your results are...");
		// let resultsP = document.querySelector("#quiz-results p")
		// quizResults.style.display = "block";
		// resultsP.append("your results are");
		// console.log(resultsP)

		// let resultsDiv = document.createElement("div");
		// resultsDiv.classList.add("resultsDiv");
		// resultsDiv.style.backgroundColor = "red";
		// resultsDiv.innerHTML = "<p>your results!</p>"
		// console.log(resultsDiv);
		// resultsDiv.style.display = "block";

	})