function funAlert() {
  alert("Yay! You clicked the fun button! 🎉");
}

function contactMe() {
  let name = prompt("Enter your name:");
  if(name) {
    alert("Hi " + name + "! Thanks for visiting my website. 😊");
  } else {
    alert("Please enter your name!");
  }
}