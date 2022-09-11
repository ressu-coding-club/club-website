// @ts-check
// ts-check for finding some stupid bugs that js allows (like having number and string calculations)
// Be aware that it also shows those ONLY typescript bugs! (those can be ignored)

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const FinnishLanguage = document.querySelector("#finnish-button");
const EnglishLanguage = document.querySelector("#english-button");
const login = document.querySelector("#loginButton");
const password = document.querySelector("#password");
const username = document.querySelector("#username");
const rememberPassword = document.querySelector("#rememberPassword");

EnglishLanguage?.addEventListener("click", (e) => {
  domReset(e);
  EnglishLanguage.classList.add("active-language");
  FinnishLanguage?.classList.remove("active-language");
});

FinnishLanguage?.addEventListener("click", (e) => {
  domReset(e);
  FinnishLanguage.classList.add("active-language");
  EnglishLanguage?.classList.remove("active-language");
});

EnglishLanguage?.addEventListener("ontouch", (e) => {
  domReset(e);
  EnglishLanguage.classList.add("active-language");
  FinnishLanguage?.classList.remove("active-language");
});

FinnishLanguage?.addEventListener("ontouch", (e) => {
  domReset(e);
  FinnishLanguage.classList.add("active-language");
  EnglishLanguage?.classList.remove("active-language");
});

let user;

login?.addEventListener("click", (e) => {
  domReset(e);

  user = new User(
    // @ts-ignore
    username?.value,
    // @ts-ignore
    password?.value,
    // @ts-ignore
    rememberPassword?.checked,
    "keyboard"
  );

  console.log(user);
});

login?.addEventListener("ontouch", (e) => {
  domReset(e);
  user = new User(
    // @ts-ignore
    username?.value,
    // @ts-ignore
    password?.value,
    // @ts-ignore
    rememberPassword?.checked,
    "touchscreen"
  );

  console.log(user);
});

openModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    domReset(e);
    // @ts-ignore
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
  button.addEventListener("ontouch", (e) => {
    domReset(e);
    // @ts-ignore
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay?.addEventListener("click", (e) => {
  domReset(e);
  const modals = document.querySelectorAll(".pop-up.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

overlay?.addEventListener("ontouch", (e) => {
  domReset(e);
  const modals = document.querySelectorAll(".pop-up.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    domReset(e);
    const modal = button.closest(".pop-up");
    closeModal(modal);
  });
  button.addEventListener("ontouch", (e) => {
    domReset(e);
    const modal = button.closest(".pop-up");
    closeModal(modal);
  });
});

/**
 * @param {{ classList: { add: (arg0: string) => void; }; } | null} modal
 */
function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay?.classList.add("active");
}

/**
 * @param {Element | null} modal
 */
function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay?.classList.remove("active");
}

function domReset(event) {
  event.stopPropagation();
  event.preventDefault();
}
