import { arrImage } from "./index.js";
import { img, input } from "./startGame.js";


export function changeImages(counterIndex) {
  img.setAttribute("src", arrImage[counterIndex]);
  imgWrapper.append(img);
  input.value = "";
}
