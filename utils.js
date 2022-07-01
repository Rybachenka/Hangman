import { img } from "./startGame.js";
import { arrImage, arrWords } from "./index.js";

function mathRandom(max) {
  return Math.floor(Math.random() * max);
}

export function randomWords() {
  let arrLetters = arrWords[mathRandom(arrWords.length)].split("");
  return arrLetters;
}

export function showImageStart() {
  img.setAttribute("src", arrImage[0]);
  imgWrapper.append(img);
}

export function counter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

export function removePopup() {
  console.log(document.querySelector(".containerPopup"));
  if (document.querySelector(".containerPopup")) {
    document.querySelector(".containerPopup").remove();
  }
}
