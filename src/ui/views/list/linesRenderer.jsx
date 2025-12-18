import { h } from "../../../h";

export function linesRenderer() {
  const container = document.querySelector(".lines");
  let count = 0;

  if (
    window.getComputedStyle(document.querySelector(".drop-down-task")).display === "flex"
  ) {
    count = document.querySelector(".drop-down-task").querySelectorAll("ol").length;
  }

  container.innerHTML = "";
  let lines = 9 - (document.querySelector(".main-tasks").querySelectorAll("ol").length + count);
  for (let i = 0; i < lines; i++) {
    container.appendChild(<hr/>);
  }
}
