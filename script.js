var displayDiv = document.querySelector(".display");
var questionsDiv = document.querySelector(".questions");
var answersDiv = document.querySelector(".answers");
var timerDiv = document.querySelector("#timer");
var lastScore = document.querySelector("#lastScore");
var scoresDiv = document.querySelector(".scores");
var startQuiz = document.querySelector("#startQuiz");

var questionsList = ["Which of the following is a true statement for JavaScript callbacks?", "What is the correct syntax for referring to an external script called 'xxx.js'?", 
"What is the function of Array object that runs through each element of the array?", ]

startQuiz.addEventListener("click", function() {
    timerStart();
})

function timerStart() {
    var secondsLeft = 200;
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerDiv.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
};

function endQuiz() {
    
}