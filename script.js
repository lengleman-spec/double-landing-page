const containerEl = document.querySelector(".container");

const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

leftEl.addEventListener("mouseover", () => {
  // add class method
  containerEl.classList.add("active-left");
});

leftEl.addEventListener("mouseleave", () => {
  containerEl.classList.remove("active-left");
});
