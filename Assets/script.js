var questions = [
    {
        q: "What does CSS stand for?",
        answers: ["Computer System Styles", "Compute Styles Syntax", "Compact Style System", "Cascading Style Sheets"],
        answer: "Cascading Style Sheets"
    },

    {
        q: "Which of the following is NOT a common data type?",
        choices: ["string", "boolean", "class", "number"],
        answer: "class"
    },

    {
        q: "What does API stand for?",
        choices: ["Applied Processing Interface", "Application Programming Interface", "Application Processor Initializer", "Applied Programming Initialization"],
        answer: "Application Programming Interface"
    },

    {
        q: "Which array method adds an element at the end of the array?",
        choices: [".add()", ".join()", ".push()", ".pop()"],
        answer: "push()"
    },

    {
        q: "What HTML attribute references an external JavaScript file?",
        choices: ["src", "id", "class", "index"],
        answer: "src"
    }

];



var currentQuestionIndex = 0;
var currentQuestion = questions[currentQuestionIndex];
// var countdownEl = document.getElementById("#timer");
var timer;
var timerCount;
var timeInterval;
var buttonChoices = document.querySelectorAll(".answer-choice");
var btn = document.getElementById("start-button");
var container = document.getElementById("container");
var display = document.getElementById("display");
var questionPlaceholder = document.querySelector(".questions");

var displayChoice = document.querySelector(".displayChoice");

// var displayQuestion = document.getElementById("questions");
// var displayAnswer = document.getElementById("answer-choice");


// answer choice and question classes need to be hidden until start button is clicked
questionPlaceholder.style.display = "none";
displayChoice.style.display = "none";

//When the Start button is clicked the questions and choices are displayed and the start button as well as the text disappear
btn.addEventListener("click", () => {
    countDown();
    btn.style.display = "none";
    container.style.display = "none";
    questionPlaceholder.style.display = "block";
    displayChoice.style.display = "block";
    startQuestions();

});

// questionPlaceholder.style.display = "block";

function startQuestions() {

    // setting the text content to our button choices
    for(var i = 0; i < buttonChoices.length; i++){
        buttonChoices.value = currentQuestion.answers;
        buttonChoices[i].textContent = i + 1 + currentQuestion.answers[i];
    }
    // when buttons are clicked you are taken to the next question
    for(var i = 0; i < buttonChoices.length; i++){
        buttonChoices[i].addEventListener("click" , function(event){
            var element = event.target;
          
            console.log(element.textContent);
            startQuestions();
        });
    }
}


timeLeftDisplay = document.getElementById("timer");

function countDown(){
    var timeLeft = 75;
    var timeInterval = setInterval(function(){
        if(timeLeft > 1) {
            timeLeftDisplay.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else if (timeLeft === 1){
            timeLeftDisplay.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        }else {
            timeLeftDisplay.textContent = '';
            clearInterval(timeInterval);
        } 
    }, 75000);
}



//     function startTimer() {
//     var timeLeft = 75;
//     var timeInterval = setInterval(function(){
//         if (timeLeft > 1){
//             timerElement.textContent = timeLeft + ' seconds remaining';
//             timeLeft--;
//         } else if (timeLeft === 1){
//             timerElement.textContent = timeLeft +' seconds remaining';
//             timeLeft--;
//         }else{
//             timerElement.textContent = '';
//             clearInterval();
//         }
//     }, 7500); 
// }

// Create a variable currentQuestionIndex that holds 0 - which identifies an index
// Create another variable that holds the object and variable just created in an array called currentQuestion
// Create a variable that holds a newly created element called button
// Set a class attribute to the button
// Set a value attribute to the button
// for each loop - pass value to the buttons - which are inside the object question - property choices
//classList.add
//classList.remove
//MDN

//currentQuestionIndex = 0 THEN currentQuestion = question[currentQuestionIndex] ::
//This means that currentQuestion is going to equal whatever position currentQuestionIndex is equal to ::
//In this case it is 0, which is the 1st question. 
 
            
       
       
// currentQuestion.answer.forEach(function (answer,index) {
//     var button = document.createElement("button");
//     button.setAttribute("class", "answer-choice");
//     button.setAttribute("value", answer);
//     button.textContent = index + 1 + ". " + answer;
//     display.appendChild(button);


// })





// function startQuiz() {

//     // timerCount = 75;
//     // startTimer()
//     startQuestions()

// }
