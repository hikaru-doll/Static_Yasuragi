document.addEventListener("DOMContentLoaded", function () {
  // ハンバーガーの開閉とタブ操作の制御
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

  // コピーライトの西暦を動的に出力する
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
