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
        answer: ".push()"
    },

    {
        q: "What HTML attribute references an external JavaScript file?",
        choices: ["src", "id", "class", "index"],
        answer: "src"
    }

];



var currentQuestionIndex = 0;
var countdownEl = document.getElementById("timer");
var timer;
var timerCount;
var timeInterval;
var timeLeft;
var score = 0;
var buttonChoices = document.querySelectorAll(".answer-choice");
var btn = document.getElementById("start-button");
var container = document.getElementById("container");
var questionPlaceholder = document.querySelector(".questions");
var displayChoice = document.querySelector(".displayChoice");
var finalScore = document.querySelector(".final-score");
var gameBox = document.querySelector(".gamebox");
var highScoresDisplay = document.getElementById("highscores-display");




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
    //loop over currentQuestion.choices and set the text of each html element where the choices go

    var currentQuestion = questions[currentQuestionIndex];
    questionPlaceholder.textContent = currentQuestion.q;

    // Setting the text content to button choices
    for (var i = 0; i < buttonChoices.length; i++) {
        buttonChoices[i].textContent = i + 1 + ". " + currentQuestion.choices[i];
        buttonChoices[i].setAttribute("data-answer", currentQuestion.choices[i]);
    }
    // when buttons are clicked you are taken to the next question
    currentQuestionIndex++



}

for (var i = 0; i < buttonChoices.length; i++) {
    buttonChoices[i].addEventListener("click", function (event) {

        var userChoice = event.target.dataset.answer;
        evaluateUserChoice(userChoice);

    })

};


//  Evaluates user answer and increase the score by 1 if correct and moves to the next question
//  Moves to the next question if incorrect.
// Ideal outcome would be to deduct time on the clock if incorrect, but I couldn't seem to get it to work


function evaluateUserChoice(chosen) {

    var correctAnswer = questions[currentQuestionIndex - 1].answer;
    console.log("compare", correctAnswer, chosen);
    if (correctAnswer === chosen) {
        score++;
        finalScore.textContent = score;

        console.log(score);
        console.log("correct");

    } else {
        timeLeft--;
        console.log('incorrect');

    }
    if (currentQuestionIndex >= questions.length) {
        endGame();
    } else {
        startQuestions();
    }
}





timeLeftDisplay = document.getElementById("timer");

function countDown() {
    var timeLeft = 25;
    var timeInterval = setInterval(function () {
        if (timeLeft > 1) {
            timeLeftDisplay.textContent = timeLeft + ' :Seconds Remaining';
            timeLeft--;
        } else if (timeLeft === 1) {
            timeLeftDisplay.textContent = timeLeft + ' :Seconds Remaining';
            timeLeft--;
        } else {
            timeLeftDisplay.textContent = '';
            clearInterval(timeInterval);
            endGame();
        }
    }, 1000);
}



function endGame() {
    // When endGame is called: 
    //redirect to highscores.html; user saves initials, which is saved to localstorage
    //after initials are submitted - a log of users appears w/ scores
 
    gameBox.style.display = "none";
    highScoresDisplay.style.display = "block";

    //Clicking the Submit button will redirect you to highscores.html page where you will be able to view high scores
    var submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", function () {
        //get user input
        //save to local storage

        var inputInitials = document.querySelector(".inputinitials").value;
        var highScores = document.querySelector(".final-score");

        localStorage.setItem("inputinitials" , inputInitials);
        localStorage.setItem("final-score" , highScores);

        window.location.href = "highscores.html"
    });


}


//An attempt at looping local storage

        // var inputInitials = document.querySelector(".inputinitials");
        // var highScores = document.querySelector(".final-score");

        // var initialsAndScores = {
            
        //         initials: inputInitials.value,
        //         scores: highScores.value
        //     };

        //     var storedData = JSON.parse(localStorage.getItem("initialsAndScores") || "[]");
        //     storedData.push(initialsAndScores);

        //     if (storedData.length > 5){
        //         storedData.pop()
        //     }

            // localStorage.setItem("initialsAndScores" , JSON.stringify(initialsAndScores))
            // // console.log("check" , initials);


// localStorage.setItem("finalScore" , JSON.stringify([]));
// console.log(localStorage.getItem("finalScore"));



















