//Business logic

function calculateResults() {
  let results = 0;
  if (document.querySelector("input[name='question1']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='question1']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='question2']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='question2']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='question3']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='question3']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='question4']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='question4']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='question5']:checked").value === "positive") {
    results = results + 1;
    document.getElementById("sus").removeAttribute("class");
  } else if (document.querySelector("input[name='question5']:checked").value === "negative") {
    results = results - 1;
    document.getElementById("sus").setAttribute("class", "hidden");
  };
  if (document.querySelector("input[name='question6']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='question6']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='question7']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='question7']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='question8']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='question8']:checked").value === "negative") {
    results = results - 1;
  };
  return results;
}
//UI logic
window.addEventListener("load", function () {
  document.getElementById("radio-form").addEventListener("submit", getResults);
})


function getResults(e) {
  e.preventDefault();
  let finalResults = calculateResults();
  if (finalResults >= -2 && finalResults <= 2) {
    document.getElementById("result").setAttribute('class', 'resultC');
    document.getElementById("python").setAttribute('class', 'hidden');
    document.getElementById("ruby").setAttribute('class', 'hidden');
    document.getElementById("c").setAttribute('class', 'sizeLimit');
    document.getElementById("result").innerText = "We recommend that you learn C!";
  } else if (finalResults <= -4 && finalResults >= -8) {
    document.getElementById("result").setAttribute('class', 'resultPython');
    document.getElementById("c").setAttribute('class', 'hidden');
    document.getElementById("ruby").setAttribute('class', 'hidden');
    document.getElementById("python").setAttribute('class', 'sizeLimit');
    document.getElementById("result").innerText = "We recommend that you learn Python!";
  } else {
    document.getElementById("result").setAttribute('class', 'resultRuby');
    document.getElementById("c").setAttribute('class', 'hidden');
    document.getElementById("python").setAttribute('class', 'hidden');
    document.getElementById("ruby").setAttribute('class', 'sizeLimit');
    document.getElementById("result").innerText = "We recommend that you learn Ruby!";
  }
}