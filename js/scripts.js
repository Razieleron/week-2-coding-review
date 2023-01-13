function handleSurvey(event) {
  event.preventDefault();

  let q1 = document.getElementById("q1");
  let q2 = document.getElementById("q2");
  let q3 = document.getElementById("q3");
  let q4 = document.getElementById("q4");
  let q5 = document.getElementById("q5");

  if (q1.checked == true) {
    output = "Python.  Anyone who like snakes should learn Python.  And it obviously trumps every other thing you like, since liking snakes is pretty degenerate, if you ask me.  Just kidding, Python is one of the most widely used and powerful languages out there!"
  }
  else if (q2.checked == true) {
    output = "Ruby. You like shiny things.  Rubies are shiny.  Ruby is shiny!  Ruby is 'a dynamic, open source programming language with a focus on simplicity and productivity.'  and that's straight from the website, by the way."
  }
  else if (q3.checked == true && q4.checked == true) {
    output = "C#.  Get it?  C.  Sea?  #(Sharp)?  Fencing?  See what I did there? But seriously 'C# is a high-level, general-purpose programming language that is easy to read because of its well-defined class hierarchy. It is the perfect language for beginner developers as it will be straightforward to grasp compared to most other languages.'  You heard it here first, folks."
  }
  else if (q5.checked == true) {
    output = "JavaScript.  I don't know why, but JavaScript feels like a big flowy blanket where nothing is really solid and nothing is really tangible, but it's warm and you feel cozy somehow."
  }
  else {
    output = "Wow.  You're hard to please.  A person as agreeable as you should probably try the 'Befunge' language. It's super easy.  Trust me."
  }


  document.getElementById("output").innerText = output;
}

window.addEventListener("load", function() {
  const form = document.getElementById("questions");
  form.addEventListener("submit", handleSurvey);
});
