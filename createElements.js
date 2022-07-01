import { startNewGame, wordContainer } from "./startGame.js";
import { removePopup } from "./utils.js";

export function createLetters(arrLetters) {
  arrLetters.forEach((item) => {
    const span = document.createElement("span");
    wordContainer.append(span);
  });
}

export function createPopup(value) {
  const popup = document.createElement("div");
  popup.classList.add("containerPopup");
  imgWrapper.before(popup);
  if (value === "win") {
    popup.innerHTML = `<div id="popup">Congratulations you win, 
    click "Start new game" !!! <button id="popupButton">Start new game</button></div>`;
  } else if (value === "lose") {
    popup.innerHTML = `<div id="popup">You lose, 
    click "Start new game" !!! <button id="popupButton">Start new game</button></div>`;
  }
  const popupButton = document.getElementById("popupButton");
  popupButton.addEventListener("click", startNewGame);
  popupButton.addEventListener("click", removePopup);
}
