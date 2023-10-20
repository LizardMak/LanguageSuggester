window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", getResults);
})

function getResults(e) {
e.preventDefault();
window.alert("edefaultworking");
let finalResultsPython = calculatePython();
let finalResultsRuby = calculateRuby();
let finalResultsC = calculateC();
console.log("python is: " + finalResultsPython);
console.log("ruby is: " + finalResultsRuby);
console.log("C is: " + finalResultsC);
}