var displayDiv = document.querySelector(".display");
var questionsDiv = document.querySelector(".questionDisplay");
var answersDiv = document.querySelector(".answerDisplay");
var correctDiv = document.querySelector(".correctDisplay");
var timerDiv = document.querySelector("#timer");
var lastScore = document.querySelector("#lastScore");
var scoresDiv = document.querySelector(".scores");
var startQuiz = document.querySelector("#startQuiz");

var scoresList = [{
    name: "",
    score: 0
}];

var slides = [
    {
        question: "Select a String function that creates a string and display in a big font as if it were in a tag?",
        choices: ["anchor()", "italics()", "blink()", "big()"],
        answer: "big()"
    },
    {
        question: "Select a function of Array object which returns a new array comprised of the current array /or its value(s)?",
        choices: ["push()", "pop()", "concat()", "some()"],
        answer: "concat()"
    },
    {
        question: "Which of the following will return the type of the arguments passed to a function?",
        choices: ["None", "All except None", "using getType function", "using typeof operator"],
        answer: "using typeof operator"
    },
    {
        question: "Which of the following is a true statement for JavaScript callbacks?",
        choices: ["None", "All except None", "A callback is a plain JavaScript function passed to some method as an argument or option.", "Some callbacks are just events, called to give the user a chance to react when a certain state is triggered."],
        answer: "All except None"
    },
    {
        question: "Which of the following function of String object returns the capitalized string while respecting the current locale?",
        choices: ["substring()", "toString()", "toUpperCase()", "toLocaleUpperCase()"],
        answer: "toLocaleUpperCase()"
    },
    {
        question: "What is the function of Array object that runs through each element of the array?",
        choices: ["concat()", "every()", "filter()", "forEach()"],
        answer: "forEach()"
    },
    {
        question: "Is it valid to pass an anonymous function as an argument to another function?",
        choices: ["true", "false"],
        answer: "true"
    },
    {
        question: "Which of the following method of Boolean object returns a string depending upon the value of the object?",
        choices: ["toString()", "valueOf()", "toSource()", "None"],
        answer: "toString()"
    },
];

var secondsLeft = 120;

function timerStart() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timerDiv.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
};

var index = Math.floor(Math.random() * slides.length);

startQuiz.addEventListener("click", function () {
    timerStart();
    createSlide(index);
});


function displayScore() {
    //get data from ls
    //parsed to array of objs
    //run the sortfx
    //verify data is sorted
    //dynamically append to html
}

function createSlide(x) {
    questionsDiv.innerHTML = "";
    answersDiv.innerHTML = "";
    var p = document.createElement("p");

    p.setAttribute("id", slides[x].question);
    p.setAttribute("class", "question");
    p.textContent = slides[x].question;
    questionsDiv.appendChild(p);

    for (var i = 0; i < slides[x].choices.length; i++) {
        var btn = document.createElement("button");
        btn.setAttribute("data-value", slides[x].choices[i]);
        btn.addEventListener("click", checkScore);
        btn.textContent = slides[x].choices[i];
        answersDiv.appendChild(btn);
    }

    function checkScore(event) {
        event.preventDefault();
        event.stopPropagation();
        correctDiv.innerHTML = "";
        var c = document.createElement("p");
        var element = event.target;
        if(element.matches("button")) {
            if (element.textContent == slides[x].answer) {
                c.textContent = "Correct! Good job.";
            }else{
                c.textContent = "Wrong! Better luck next time.";
                secondsLeft -= 15;
            }
        }
        correctDiv.appendChild(c);
        slides.splice(x, 1);
        var y = Math.floor(Math.random() * slides.length);
        createSlide(y);
    }
    if (slides.length = 0) {
        endQuiz();
    }
}   


function endQuiz() {
    displayDiv.innerHTML = "";
    var ask = document.createElement("form");
    ask.setAttribute("input", "")
}


function endGame() {
    //ask for userinput
    //store userinput into an obj contain name and score.
    //push the obj into the scorearray

}