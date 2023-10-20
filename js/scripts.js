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
  const question4Value = document.querySelector("input[name='name4']:checked").value;
  const question5Value = document.querySelector("input[name='name5']:checked").value;
  const question6Value = document.querySelector("input[name='name6']:checked").value;
  const question7Value = document.querySelector("input[name='name7']:checked").value;
  const question8Value = document.querySelector("input[name='name8']:checked").value;
  const question9Value = document.querySelector("input[name='name9']:checked").value;
  const question10Value = document.querySelector("input[name='name10']:checked").value;
  const question11Value = document.querySelector("input[name='name11']:checked").value;
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
  if (question4Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
   if (question5Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
   if (question6Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  if (question7Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  if (question8Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  if (question9Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  if (question10Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  if (question11Value === "python") {
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
  const question4Value = document.querySelector("input[name='name4']:checked").value;
  const question5Value = document.querySelector("input[name='name5']:checked").value;
  const question6Value = document.querySelector("input[name='name6']:checked").value;
  const question7Value = document.querySelector("input[name='name7']:checked").value;
  const question8Value = document.querySelector("input[name='name8']:checked").value;
  const question9Value = document.querySelector("input[name='name9']:checked").value;
  const question10Value = document.querySelector("input[name='name10']:checked").value;
  const question11Value = document.querySelector("input[name='name11']:checked").value;
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
  if (question4Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question5Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question6Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question7Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question8Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question9Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question10Value === "ruby") {
    resultsRuby = resultsRuby + 1;
  } else {
    resultsRuby = resultsRuby + 0;
  };
  if (question11Value === "ruby") {
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
  const question4Value = document.querySelector("input[name='name4']:checked").value;
  const question5Value = document.querySelector("input[name='name5']:checked").value;
  const question6Value = document.querySelector("input[name='name6']:checked").value;
  const question7Value = document.querySelector("input[name='name7']:checked").value;
  const question8Value = document.querySelector("input[name='name8']:checked").value;
  const question9Value = document.querySelector("input[name='name9']:checked").value;
  const question10Value = document.querySelector("input[name='name10']:checked").value;
  const question11Value = document.querySelector("input[name='name11']:checked").value;
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
  if (question4Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question5Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question6Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question7Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question8Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question9Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question10Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  if (question11Value === "c") {
    resultsC = resultsC + 1;
  } else {
    resultsC = resultsC + 0;
  };
  console.log("C should be: " + resultsC);
  return resultsC;
}