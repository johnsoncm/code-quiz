
var playAgain = document.getElementById("play-button");

var userInitials = document.getElementById("nameInput");
var printHighScores = document.getElementById("scoreinput")




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


