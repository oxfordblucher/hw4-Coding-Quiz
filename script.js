var displayDiv = document.querySelector(".display");
var questionsDiv = document.querySelector(".questions");
var answersDiv = document.querySelector(".answers");
var timerDiv = document.querySelector("#timer");
var lastScore = document.querySelector("#lastScore");
var scoresDiv = document.querySelector(".scores");
var startQuiz = document.querySelector("#startQuiz");

startQuiz.addEventListener("click", startGame());

var secondsLeft = 200;

function timerStart() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerDiv.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);

        }
    })
}

function startGame(event) {
    event.preventDefault();

}