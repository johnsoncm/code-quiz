var questions = [
    {
        q: "What does CSS stand for?",
        choices: ["Computer System Styles", "Compute Styles Syntax", "Compact Style System", "Cascading Style Sheets"],
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
var countdownEl = document.getElementById("#timer");
var timer;
var timerCount;
var timeInterval;
var timeLeft;
var buttonChoices = document.querySelectorAll(".answer-choice");
var btn = document.getElementById("start-button");
var container = document.getElementById("container");
var display = document.getElementById("display");
var questionPlaceholder = document.querySelector(".questions");
var displayChoice = document.querySelector(".displayChoice");
var finalScore = document.querySelector("final-score");





// answer choice and question classes are hidden until start button is clicked
questionPlaceholder.style.display = "none";
displayChoice.style.display = "none";

//When the Start button is clicked the questions and choices are displayed and the start button as well as the text disappear. The countdown begins.
btn.addEventListener("click", () => {
    countDown();
    btn.style.display = "none";
    container.style.display = "none";
    questionPlaceholder.style.display = "block";
    displayChoice.style.display = "block";
    startQuestions();

});




function startQuestions() {
//set currentQuestion
//get currentQuestion.q and set the text of the html element where the question goes
//loop over currentQuestion.choices and set the text of each html element where the choices go

var currentQuestion = questions[currentQuestionIndex];
questionPlaceholder.textContent = currentQuestion.q;

    // Setting the text content to button choices
    for(var i = 0; i < buttonChoices.length; i++){
        buttonChoices[i].textContent = i + 1 + currentQuestion.choices[i];
    
    }
    // when buttons are clicked you are taken to the next question
    currentQuestionIndex++ 

    for(var i = 0; i < buttonChoices.length; i++){
        buttonChoices[i].addEventListener("click" , function(event){
            console.log("Clicked");
            var element = event.target;
            
           
            startQuestions();
        });
    }
}
 

// // evaluates user answer and increase the score by 1 if correct and moves to the next question
// // Moves to the next question if incorrect.
// function evaluateUserChoice(chosen, answer) {

//     var correctAnswer = currentQuestion.answer[0];
    
// //     // for(var i = 0; i < correctAnswer.length; i++){
// //     //     correctAnswer[i].textContent = i + 1 + 
// //     // }
//    if (correctAnswer = true) {
//         finalScore++;
//         startQuestions();
//     }else {
//         console.log('incorrect');
//         timeLeft--
//         startQuestions();
//     }
// } console.log(correctAnswer);




timeLeftDisplay = document.getElementById("timer");

function countDown(){
    var timeLeft = 25;
    var timeInterval = setInterval(function(){
        if(timeLeft > 1) {
            timeLeftDisplay.textContent = timeLeft + ' :Seconds Remaining';
            timeLeft--;
        } else if (timeLeft === 1){
            timeLeftDisplay.textContent = timeLeft + ' :Seconds Remaining';
            timeLeft--;
        }else {
            timeLeftDisplay.textContent = '';
            clearInterval(timeInterval);
            endGame();
        } 
    }, 1000);
}



function endGame(){
    // When endGame is called: 
        //redirect to highscores.html; user saves initials, which is saved to localstorage
        //after initials are submitted - a log of users appears w/ scores
       finalScore.display = "block";

       window.localStorage.setItem('user initials');
       console.log(localStorage);


        //Clicking the Submit button will redirect you to highscores.html page where you will be able to view high scores

        var submitButton = document.getElementById("submit");
        submitButton.addEventListener("click" , window.location.href="highscores.html" )

         //play again button redirects to index.html
        var playButton = document.getElementById("");
        playButton.addEventListener("click" , window.location.href="index.html");


        
}

//NEED TO UPDATE THIS SECTION
//display scores is hidden  until endGame is called

// endGame();
// var displayScores = document.getElementById("highscores-display");
// displayScores.style.display = "none";

// displayScores.style.display = "block";

// btn.addEventListener("click", () => {
//     countDown();
//     btn.style.display = "none";
//     container.style.display = "none";
//     questionPlaceholder.style.display = "block";
//     displayChoice.style.display = "block";
//     startQuestions();

// });









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
