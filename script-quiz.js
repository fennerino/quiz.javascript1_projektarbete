
const proceedBtn = document.querySelector("#popup-confirm #proceed-btn");
proceedBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let popupDiv = document.querySelector(".popup-div");
  popupDiv.style.display = "none";
});


const questions = [
	"Is JavaScript a case-sensitive language?", // answer: "Yes"
	"Can JavaScript be used for both frontend and backend development?", // answer: "Yes"
	"Does JavaScript suppo1rt classes?", // answer: "Yes"
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

let correctArray = [ ];
let incorrectArray = [ ];

let fieldsetNodes = document.querySelectorAll("fieldset .question");
let fieldsetArray = Array.from(fieldsetNodes);

questions.forEach((question, index) => {
  fieldsetArray[index].innerText = question;
  index++;
  console.log(index, question);
})

let lockInBtn = document.querySelectorAll("fieldset .lockIn-btn");
let lockinBtns = Array.from(lockInBtn);
// console.log(lockInBtn, lockinBtns);

lockinBtns.forEach((button, index) => {
  button.textContent = "Lock in answer";

  button.addEventListener("click", (e) => {
    e.preventDefault();

      let questionDiv = button.closest(".question-div");
			// let questionName = "q" + (index+1);

			let selectedRadio = questionDiv.querySelector(
				"input[type='radio']:checked"
			);

    if (!selectedRadio) {
			alert("select an answer");
			return;
		} 

    else if (selectedRadio) {
      let userinput = selectedRadio.value;
      let correctanswer = correctAnswers[index];
      console.log(index+1, "User answer: " + userinput);
      console.log(index+1, "Correct answer: " + correctanswer)

      if (userinput === correctanswer) {
        correctArray.push(index+1);
        console.log(correctArray);
      }

      else {
        incorrectArray.push(index+1);
        console.log("Question " + (index+1) + " incorrect.");
      }
    }
    
    
      let radiobuttons = questionDiv.querySelectorAll("input[type='radio']").forEach(radio => {
        radio.disabled = true;
      });
    //   radiobuttons.forEach(radio => {
    //     radio.disabled = true;
    // })

    button.disabled = true;
    button.innerText = "Locked in";
    button.style.color = "grey";
    button.style.fontStyle = "italic";
    console.log("question " + (index + 1) + " successfully locked in");




  })
})

  // questions.forEach((question, index) => {
	// 	fieldsetArray[index].innerText = question;
	// 	index++;
	// 	console.log(question, index);
	// });

//  document.getElementsByName('q1')
//   .forEach(radio => {
//     if (radio.checked) {
//       console.log(radio.value);
//     }
// });
