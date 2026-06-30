const body = document.body;
const ham = document.querySelector(".ham");
const menu = document.querySelector(".main-navigation");
ham.addEventListener("click", () => {
  body.classList.toggle("open");
});
menu.addEventListener("click", () => {
  body.classList.remove("open");
});
let focusTrap = document.getElementById("js-focus-trap");
focusTrap.addEventListener("focus", (e) => {
  ham.focus();
});
