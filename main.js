let mainBox = document.querySelector(".container");
let boxs = document.querySelectorAll(".container div");
let sidber = document.querySelector(".side-bar");
let controlNum = 2;

boxs.forEach((box) => {
  box.addEventListener("click", () => {
    if (controlNum % 2 == 0) {
      box.textContent = "x";
      box.classList.add("X");
      box.style.pointerEvents = "none";
      box.style.color = "red";
      sidber.innerHTML += "<br />O player Turn";
      controlNum++;
      cheackWinner();
    } else if (controlNum % 2 != 0) {
      box.textContent = "O";
      box.classList.add("O");
      box.style.color = "blue";
      box.style.pointerEvents = "none";
      sidber.innerHTML += "<br />X player Turn ";
      controlNum--;
      cheackWinner();
    }
  });
});

function cheackWinner() {
  let X = document.querySelectorAll(".X");
  let O = document.querySelectorAll(".O");
  if (
    boxs[0].innerHTML === boxs[1].innerHTML &&
    boxs[1].innerHTML === boxs[2].innerHTML &&
    boxs[0].innerHTML != ""
  ) {
    sidber.innerHTML += "<br />the winner is " + boxs[0].innerHTML;
    mainBox.style.pointerEvents = "none";
  } else if (
    boxs[3].innerHTML === boxs[4].innerHTML &&
    boxs[4].innerHTML === boxs[5].innerHTML &&
    boxs[3].innerHTML != ""
  ) {
    sidber.innerHTML += "<br />the winner is " + boxs[3].innerHTML;
    mainBox.style.pointerEvents = "none";
  } else if (
    boxs[6].innerHTML === boxs[7].innerHTML &&
    boxs[7].innerHTML === boxs[8].innerHTML &&
    boxs[6].innerHTML != ""
  ) {
    sidber.innerHTML += "<br />the winner is " + boxs[6].innerHTML;
    mainBox.style.pointerEvents = "none";
  } else if (
    boxs[0].innerHTML === boxs[3].innerHTML &&
    boxs[3].innerHTML === boxs[6].innerHTML &&
    boxs[6].innerHTML != ""
  ) {
    sidber.innerHTML += "<br />the winner is " + boxs[6].innerHTML;
    mainBox.style.pointerEvents = "none";
  } else if (
    boxs[1].innerHTML === boxs[4].innerHTML &&
    boxs[4].innerHTML === boxs[7].innerHTML &&
    boxs[4].innerHTML != ""
  ) {
    sidber.innerHTML += "<br />the winner is " + boxs[1].innerHTML;
    mainBox.style.pointerEvents = "none";
  } else if (
    boxs[2].innerHTML === boxs[5].innerHTML &&
    boxs[5].innerHTML === boxs[8].innerHTML &&
    boxs[5].innerHTML != ""
  ) {
    sidber.innerHTML += "<br />the winner is " + boxs[2].innerHTML;
    mainBox.style.pointerEvents = "none";
  } else if (
    boxs[0].innerHTML === boxs[4].innerHTML &&
    boxs[4].innerHTML === boxs[8].innerHTML &&
    boxs[4].innerHTML != ""
  ) {
    sidber.innerHTML += "<br />the winner is " + boxs[0].innerHTML;
    mainBox.style.pointerEvents = "none";
  } else if (
    boxs[2].innerHTML === boxs[4].innerHTML &&
    boxs[4].innerHTML === boxs[6].innerHTML &&
    boxs[4].innerHTML != ""
  ) {
    sidber.innerHTML += "<br />the winner is " + boxs[2].innerHTML;
    mainBox.style.pointerEvents = "none";
  } else if (X.length + O.length === 9) {
    sidber.innerHTML += "<br />There is no winner ";
    mainBox.style.pointerEvents = "none";
  }
}
