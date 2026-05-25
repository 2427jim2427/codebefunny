// codebefunny — 互動腳本

// 1) 手機版選單開關
const toggle = document.getElementById("navToggle");
const links = document.getElementById("navLinks");
if (toggle && links) {
  toggle.addEventListener("click", () => links.classList.toggle("open"));
  // 點選連結後自動關閉選單
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => links.classList.remove("open"))
  );
}

// 2) 頁尾年份自動更新
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();
