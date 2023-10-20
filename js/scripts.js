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

function calculatePython() {
  let resultsPython = 0;
  const question1Value = document.querySelector("input[name='name']:checked").value;
  const question2Value = document.querySelector("input[name='name2']:checked").value;
  const question3Value = document.querySelector("input[name='name3']:checked").value;
  if (question1Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  if (question2Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  if (question3Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  console.log("python should be: " + resultsPython);
  return resultsPython;
}

function calculateRuby() {
  let resultsRuby = 0;
  const question1Value = document.querySelector("input[name='name']:checked").value;
  const question2Value = document.querySelector("input[name='name2']:checked").value;
  const question3Value = document.querySelector("input[name='name3']:checked").value;
  if (question1Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question2Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question3Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  console.log("ruby should be: " + resultsRuby);
  return resultsRuby;
}

function calculateC() {
  let resultsC = 0;
  const question1Value = document.querySelector("input[name='name']:checked").value;
  const question2Value = document.querySelector("input[name='name2']:checked").value;
  const question3Value = document.querySelector("input[name='name3']:checked").value;
  if (question1Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question2Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question3Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  console.log("C should be: " + resultsC);
  return resultsC;
}