import { showLetter } from "./functionsShowElemets.js";
import { changeImages } from "./changeImages.js";
import { arrNodes, input } from "./startGame.js";
import { createWinPopup } from "./createElements.js";
import { arrImage } from "./index.js";

export function chekEnterValue(resultCounter, arrLetters) {
  if (arrLetters.includes(input.value)) {
    showLetter(arrLetters, arrNodes, input);
    checkWinGame(arrLetters);
  } else {
    const wrongAttemps = resultCounter();
    changeImages(arrImage, wrongAttemps, input);
    return wrongAttemps;
  }
}

function checkWinGame(arrLetters) {
  let arr = [];
  const strLetters = arrLetters.toString();
  arrNodes.forEach((el) => {
    if (el.textContent !== "") {
      arr.push(el.textContent);
    }
  });
  const newstrLetters = arr.toString();
  console.log(strLetters);
  console.log(newstrLetters);
  if (strLetters === newstrLetters) {
    arr = [];
    // button.removeEventListener("click", stepInTheGame);
    // input.removeEventListener("keydown", stepInTheGame);
    createWinPopup();
  }
}
