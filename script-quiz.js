
let divs = document.querySelectorAll("div");
divs.forEach((div, index) => {
  // if (index !== 0) {
  //   div.style.display = "none";
  // }
})

const proceedBtn = document.querySelector("#popup-confirm #proceed-btn");
proceedBtn.addEventListener("click", (e) => {
	e.preventDefault();
  
  // console.log(e.currentTarget)
  // console.log(e.target.parentElement.parentElement.nextElementSibling)

let parentDiv = e.target.parentElement.parentElement;
console.log(parentDiv)

let nextDiv = parentDiv.nextElementSibling;
console.log(nextDiv);
Z

let questionDiv = e.target.parentElement.closest("div");
console.log(questionDiv)
// let nextnextDiv = nextDiv.nextElementSibling;
// console.log(nextnextDiv)

// let questionDiv = e.target.closest(".question-div");
// console.log(questionDiv)

	let popupDiv = document.querySelector(".popup-div");
	popupDiv.style.display = "none";

	// let question1 = document.querySelector("fieldset").classList.add("active");
	// console.log(document.querySelector(question1, "fieldset"));
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


// loop through questions, forEach arrow-function //
questions.forEach((question, index) => {
	fieldsetArray[index].innerText = question;
	index++;
	console.log(index, question);
});

let lockInBtn = document.querySelectorAll("fieldset .lockIn-btn");
let lockinBtns = Array.from(lockInBtn);

// loop through lockinBtns, forEach arrow-function //
lockinBtns.forEach((button, index) => {
	button.textContent = "Lock in answer";

	//eventListener "click" arrow function
	button.addEventListener("click", (e) => {
		e.preventDefault();
		let questionDiv = button.closest(".question-div");
    console.log(questionDiv)

		let selectedRadio = questionDiv.querySelector(
			"input[type='radio']:checked"
		);
		if (!selectedRadio) {
			alert("Make a selection before locking in your answer.");
			return;
		} else if (selectedRadio) {
			let userinput = selectedRadio.value;
			let correctanswer = correctAnswers[index];
			console.log(index + 1, "User answer: " + userinput);
			console.log(index + 1, "Correct answer: " + correctanswer);

			if (userinput === correctanswer) {
				correctArray.push(index + 1);
				console.log(correctArray);
			} else {
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
			// nextQuestion.style.opacity = "0";
		}

		// loop through radio-btns' value, forEach arrow-function //
		let radiobuttons = questionDiv
			.querySelectorAll("input[type='radio']")
			.forEach((radio) => {
				radio.disabled = true;
			});
		//   radiobuttons.forEach(radio => {
		//     radio.disabled = true;
		// })

		button.disabled = true;
		button.innerText = "Locked in";
		button.style.color = "grey";
		button.style.fontStyle = "italic";
		// console.log("question " + (index + 1) + " successfully locked in");
	});
});
