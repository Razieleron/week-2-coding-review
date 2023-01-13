function handleSurvey(event) {
  event.preventDefault();

  let q1 = document.getElementById("q1");
  let q2 = document.getElementById("q2");
  let q3 = document.getElementById("q3");
  let q4 = document.getElementById("q4");
  let q5 = document.getElementById("q5");

  if (q1.checked == true) {
    output = "python"
  }
  else if (q2.checked == true) {
    output = "ruby"
  }
  else if (q3.checked == true && q4.checked == true) {
    output = "c#"
  }
  else if (q5.checked == true) {
    output = "javascript"
  }
  else {
    output = ".net"
  }


  document.getElementById("output").innerText = output;
}

window.addEventListener("load", function() {
  const form = document.getElementById("questions");
  form.addEventListener("submit", handleSurvey);
});
