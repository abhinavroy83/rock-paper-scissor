const input_container = document.querySelector(".input-container");
const btn = document.querySelectorAll(".button");
console.log("check");
let choice = ["paper", "scissor", "rock"];
let userChoice;
let computerinput;

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * choice.length);
  return choice[randomIndex];
}


btn.forEach((buttons) => {
  buttons.addEventListener("click", function (e) {
    userChoice = buttons.getAttribute("data-choice");
    // console.log(userChoice);
    
    checkWinner();
  });
});

function checkWinner() {
  computerinput = computerChoice();
  console.log(`userChoice ${userChoice} computerinput ${computerinput}`);
  updateimg(userChoice);
  updateimg(computerChoice);
  
  if (userChoice === computerinput) {
    console.log("tie");
    // input_container.remove();
    input_container.classList.toggle("remove")
  } else {
    console.log("lose");
  }
}

function
