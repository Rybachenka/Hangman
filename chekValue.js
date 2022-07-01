import { showLetter } from "./functionsShowElemets.js";
import { changeImages } from "./changeImages.js";
import { arrNodes, input } from "./startGame.js";
import { createPopup } from "./createElements.js";

export function chekEnterValue(resultCounter, arrLetters) {
  if (arrLetters.includes(input.value.toLowerCase())) {
    showLetter(arrLetters);
    const isWin = checkWinGame(arrLetters);
    return isWin;
  } else {
    const wrongAttemps = resultCounter();
    changeImages(wrongAttemps);
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
  if (strLetters === newstrLetters) {
    createPopup("win");
    return true;
  }
  return false;
}
