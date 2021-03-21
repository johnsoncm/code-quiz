
var userInitials = document.getElementById("nameInput");
var printHighScores = document.getElementById("scoreinput")
var playAgain = document.getElementById("play-button");


//function to display user input initials and scores on the highscores.html page
function displayHighScores(){
    var inputInitials = localStorage.getItem("inputinitials");
    var highScores = localStorage.getItem("highScores");
    
    userInitials.textContent = inputInitials;
    printHighScores.textContent = highScores;
}

displayHighScores();

playAgain.addEventListener("click", () => {
    //    play again button redirects to index.html
    playAgain.addEventListener("click" , window.location.href="index.html");
});





//An attempt at looping local storage

// var scoresDisplay = document.getElementById("nameInput");
// var playerScore = document.getElementById("scoreinput");


// function displayScores(){
//     var storedData = JSON.parse(localStorage.getItem("initialsAndScores"));

//     for (var i = 0; i < storedData.length; i++) {
//         playerScore[i].textContent = storedData[i].name
//     }
// };
