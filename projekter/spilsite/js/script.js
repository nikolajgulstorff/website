
window.addEventListener("load",startGame);

function startGame() {
  console.log("startGame");
  document.querySelector("#sun").classList.add("sun_timer");
  document.querySelector("#sun").addEventListener("animationend", endGame);

  console.log("Tiden er startet");
}

function endGame() {
  console.log("endGame");
  document.querySelector("#sun").removeEventListener("animationend", endGame);
  console.log("Tiden er stoppet");
}



