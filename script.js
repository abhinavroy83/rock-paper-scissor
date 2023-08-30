const input_container = document.querySelector(".input-container");
const display_container=document.querySelector(".display_container")
const btn = document.querySelectorAll(".button");
const user_select = document.querySelector(".user_select");
const machine_select = document.querySelector(".machine_select");

console.log("check");
let random = ["paper", "scissor", "rock"];
let userChoice;
let computerinput;

function computerChoice() {
  const randomIndex = Math.floor(Math.random() * random.length);
  return random[randomIndex];
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
  updateimg(user_select, userChoice);
  updateimg(machine_select, computerinput);
  // input_container.remove()


  if (userChoice === computerinput) {
    console.log("tie");
    renderResult()
  } else if (
    (userChoice === "rock" && computerinput === "scissor") ||
    (userChoice === "paper" && computerinput === "rock") ||
    (userChoice === "scissor" && computerinput === "paper")
  ) {
    console.log("youwin");
    renderResult()
  } else {
    console.log("computerwin");
    renderResult()
  }
}
function renderResult(){
  input_container.classList.toggle("remove")
  display_container.classList.toggle("show")
  // playAgain.classList.toggle("show")
  // winnerMessage  = ""
}

function updateimg(select, choice) {
  select.classList.remove("paper");
  select.classList.remove("rock");
  select.classList.remove("scissor");

  const img = select.querySelector("img");
  select.classList.add(choice);
  img.src = `./assests/${choice}.png`;
  img.alt = choice;
}
