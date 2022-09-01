// @ts-check
// ts-check for finding some stupid bugs that js allows (like having number and string calculations)
// Be aware that it also shows some ONLY typescript bugs! (those can be ignored)

const home = document.querySelector(".tob-bar-home ");
const project = document.querySelector(".tob-bar-project");
const info = document.querySelector(".tob-bar-info");
const settings = document.querySelector(".tob-bar-setting");

let USERSTATE;

home?.addEventListener("click", () => {
  updateState("home");
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

project?.addEventListener("ontouch", () => {
  updateState("project");
  updateIconBar();
});

info?.addEventListener("click", () => {
  updateState("info");
  updateIconBar();
});

info?.addEventListener("ontouch", () => {
  updateState("info");
  updateIconBar();
});

settings?.addEventListener("click", () => {
  updateState("settings");
  updateIconBar();
});

settings?.addEventListener("ontouch", () => {
  updateState("settings");
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
      settings?.classList.remove("active");
      return;
    case "project":
      home?.classList.remove("active");
      project?.classList.add("active");
      info?.classList.remove("active");
      settings?.classList.remove("active");
      return;
    case "info":
      home?.classList.remove("active");
      project?.classList.remove("active");
      info?.classList.add("active");
      settings?.classList.remove("active");
      return;
    case "settings":
      home?.classList.remove("active");
      project?.classList.remove("active");
      info?.classList.remove("active");
      settings?.classList.add("active");
      return;
  }
}

settings?.addEventListener("mouseover", () => {
  // add spin
  console.log("hi");
  const gear = document.querySelector(".settings-gear");
  gear?.classList.add("fa-spin");
});

settings?.addEventListener("mouseleave", () => {
  // remove spin
  const gear = document.querySelector(".settings-gear");
  gear?.classList.remove("fa-spin");
});
