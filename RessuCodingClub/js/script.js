// @ts-check
// ts-check for finding some stupid bugs that js allows (like having number and string calculations)
// Be aware that it also shows some ONLY typescript bugs! (those can be ignored)

const home = document.querySelector(".tob-bar-home ");
const project = document.querySelector(".tob-bar-project");
const info = document.querySelector(".tob-bar-info");

let USERSTATE;

home?.addEventListener("click", () => {
  updateState("home");
  updateIconBar();
});

project?.addEventListener("click", () => {
  updateState("project");
  updateIconBar();
});

info?.addEventListener("click", () => {
  updateState("info");
  updateIconBar();
});

home?.addEventListener("ontouch", () => {
  updateState("home");
  updateIconBar();
});

project?.addEventListener("click", () => {
  updateState("project");
  updateIconBar();
});

info?.addEventListener("click", () => {
  updateState("info");
  updateIconBar();
});

/**
 * @param {string} currentstate
 */
function updateState(currentstate) {
  USERSTATE = currentstate;
}

updateState("home");

function updateIconBar() {
  switch (USERSTATE) {
    case "home":
      home?.classList.add("active");
      project?.classList.remove("active");
      info?.classList.remove("active");
      return;
    case "project":
      home?.classList.remove("active");
      project?.classList.add("active");
      info?.classList.remove("active");
      return;
    case "info":
      home?.classList.remove("active");
      project?.classList.remove("active");
      info?.classList.add("active");
      return;
  }
}
