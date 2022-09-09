// @ts-check
// ts-check for finding some stupid bugs that js allows (like having number and string calculations)
// Be aware that it also shows those ONLY typescript bugs! (those can be ignored)

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");
const FinnishLanguage = document.querySelector("#finnish-button");
const EnglishLanguage = document.querySelector("#english-button");

EnglishLanguage?.addEventListener("click", () => {
  EnglishLanguage.classList.add("active-language");
  FinnishLanguage?.classList.remove("active-language");
});

FinnishLanguage?.addEventListener("click", () => {
  FinnishLanguage.classList.add("active-language");
  EnglishLanguage?.classList.remove("active-language");
});

EnglishLanguage?.addEventListener("ontouch", () => {
  EnglishLanguage.classList.add("active-language");
  FinnishLanguage?.classList.remove("active-language");
});

FinnishLanguage?.addEventListener("ontouch", () => {
  FinnishLanguage.classList.add("active-language");
  EnglishLanguage?.classList.remove("active-language");
});

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
  button.addEventListener("ontouch", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay?.addEventListener("click", () => {
  const modals = document.querySelectorAll(".pop-up.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

overlay?.addEventListener("ontouch", () => {
  const modals = document.querySelectorAll(".pop-up.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".pop-up");
    closeModal(modal);
  });
  button.addEventListener("ontouch", () => {
    const modal = button.closest(".pop-up");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay?.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay?.classList.remove("active");
}
