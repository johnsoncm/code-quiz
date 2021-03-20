
var playAgain = document.getElementById("play-button");
var highScoresList = document.querySelector("#ordered-list");
var highScores = JSON.parse(localStorage.getItem(''))


playAgain.addEventListener("click", () => {
    //    play again button redirects to index.html
    playAgain.addEventListener("click" , window.location.href="index.html");
});

