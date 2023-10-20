window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", getResults);
})

function calculateResults() {
  let results = 0;
  if (document.querySelector("input[name='name']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='name']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='name2']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='name2']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='name3']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='name3']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='name4']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='name4']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='name5']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='name5']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='name6']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='name6']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='name7']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='name7']:checked").value === "negative") {
    results = results - 1;
  };
  if (document.querySelector("input[name='name8']:checked").value === "positive") {
    results = results + 1;
  } else if (document.querySelector("input[name='name8']:checked").value === "negative") {
    results = results - 1;
  };
  console.log("should be: " + results)
  return results; 
}
//UI logic
function getResults(e) {
  e.preventDefault();
  window.alert("edefaultworking");
  let finalResults = calculateResults();
  console.log("is: " + finalResults);
  if (finalResults >= -2 && finalResults <= 2) {
    document.getElementById("result").innerText = "We recommend that you learn C!";
  } else if (finalResults <= -4 && finalResults >= -8) {
    document.getElementById("result").innerText = "We recommend that you learn Python!";
  } else {
    document.getElementById("result").innerText = "We recommend that you learn Ruby!";
  }
  }