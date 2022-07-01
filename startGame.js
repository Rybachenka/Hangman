import { createLetters, createPopup } from "./createElements.js";
import { chekEnterValue } from "./chekValue.js";
import { showImageStart, counter, randomWords, removePopup } from "./utils.js";
import { arrImage, arrWords } from "./index.js";

export const input = document.getElementById("input");
export const wordContainer = document.getElementById("containerWordLine");
export const arrNodes = wordContainer.childNodes;
export const img = document.createElement("img");
export const button = document.getElementById("button");
export const buttonStartNewGame = document.getElementById("buttonStart");

export function startNewGame() {
  input.value = "";
  wordContainer.textContent = "";

  const resultCounter = counter();

  const arrLetters = randomWords();

  createLetters(arrLetters);
  showImageStart(arrImage, img);
  console.log(arrLetters);

  button.addEventListener("click", stepInTheGame);
  input.addEventListener("keydown", stepInTheGame);
  buttonStartNewGame.addEventListener("click", startNewGame);
  buttonStartNewGame.addEventListener("click", removePopup);
  buttonStartNewGame.addEventListener("click", removeEvent);

  function stepInTheGame(event) {
    let counterAttemps;
    const keyMouseName = event.pointerType;
    const keyName = event.code;
    if (keyName === "Enter" || keyMouseName === "mouse") {
      counterAttemps = chekEnterValue(resultCounter, arrLetters);
    }
    if (counterAttemps === true) {
      removeEvent();
    }
    if (counterAttemps >= 4) {
      removeEvent();
      createPopup("lose");
    }
  }
  function removeEvent() {
    button.removeEventListener("click", stepInTheGame);
    input.removeEventListener("keydown", stepInTheGame);
  }
}
