window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", getResults);
})

function getResults(e) {
e.preventDefault();
window.alert("edefaultworking");
}

