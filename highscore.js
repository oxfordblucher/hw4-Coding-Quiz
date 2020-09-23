var scoresDiv = document.querySelector(".scores");
var lastScore = document.querySelector("#lastScore");
var clearDiv = document.querySelector(".clear");
var clearScores = document.querySelector("#clearScores");

function renderScores() {
    scoresDiv.innerHTML = "";
    var allScores = localStorage.getItem("allScores");
    if (allScores === null) {
        allScores = [];
    }else{
        allScores = JSON.parse(allScores);
    }
    allScores.sort(function (a, b) {
        return b.score - a.score
    });    
    for(let i = 0; i < allScores.length; i++) {
        var li = document.createElement("li");
        li.textContent = allScores[i].name + " " + allScores[i].score;
        scoresDiv.appendChild(li);
    }}

renderScores(); 

clearScores.addEventListener("click", function(event) {
    event.preventDefault();
    localStorage.clear();
    renderScores();
});