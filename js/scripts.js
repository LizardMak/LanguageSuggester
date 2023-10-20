window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", getResults);
})

function getResults(e) {
e.preventDefault();
window.alert("edefaultworking");
let resultsPython = calculatePython();
console.log(resultsPython);
}

function calculatePython() {
  let resultsPython = 0;
  const question1Value = document.querySelector("input[name='name']:checked").value;
  if (question1Value === "python") {
    resultsPython = resultsPython + 1;
  } else {
    resultsPython = resultsPython + 0;
  };
  console.log(resultsPython);
  return resultsPython.toString();
}