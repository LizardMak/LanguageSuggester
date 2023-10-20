window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", getResults);
})

function getResults(e) {
e.preventDefault();
window.alert("edefaultworking");
let results = 0;
let inputError = false;
if (document.querySelector("input[name='name']:checked").value === "positive") {
  results = results + 1;
} else if (document.querySelector("input[name='name']:checked").value === "negative") {
  results = results - 1;
} else {
  inputError = true;
};
if (document.querySelector("input[name='name2']:checked").value === "positive") {
  results = results + 1;
} else if (document.querySelector("input[name='name2']:checked").value === "negative") {
  results = results - 1;
} else {
  inputError = true;
};
if (document.querySelector("input[name='name3']:checked").value === "positive") {
  results = results + 1;
} else if (document.querySelector("input[name='name3']:checked").value === "negative") {
  results = results - 1;
} else {
  inputError = true;
};
if (document.querySelector("input[name='name4']:checked").value === "positive") {
  results = results + 1;
} else if (document.querySelector("input[name='name4']:checked").value === "negative") {
  results = results - 1;
} else {
  inputError = true;
};
if (document.querySelector("input[name='name5']:checked").value === "positive") {
  results = results + 1;
} else if (document.querySelector("input[name='name5']:checked").value === "negative") {
  results = results - 1;
} else {
  inputError = true;
};
if (document.querySelector("input[name='name6']:checked").value === "positive") {
  results = results + 1;
} else if (document.querySelector("input[name='name6']:checked").value === "negative") {
  results = results - 1;
} else {
  inputError = true;
};
if (document.querySelector("input[name='name7']:checked").value === "positive") {
  results = results + 1;
} else if (document.querySelector("input[name='name7']:checked").value === "negative") {
  results = results - 1;
} else {
  inputError = true;
};
if (document.querySelector("input[name='name8']:checked").value === "positive") {
  results = results + 1;
} else if (document.querySelector("input[name='name8']:checked").value === "negative") {
  results = results - 1;
} else {
  inputError = true;
};
console.log(results) 
}