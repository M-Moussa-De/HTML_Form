// Change between dark and light mode
const body = document.getElementsByTagName("body")[0];
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");

moon.addEventListener("click", () => {
  body.classList.remove("body");
  body.classList.add("bg-night");

  moon.classList.remove("show");
  moon.classList.add("hide");

  sun.classList.add("show");
  sun.classList.remove("hide");
});

sun.addEventListener("click", () => {
  if (sun.hasAttribute("class", "show")) {
    body.classList.add("bg-day");
    body.classList.remove("bg-night");

    sun.classList.remove("show");
    sun.classList.add("hide");

    moon.classList.add("show");
    moon.classList.remove("hide");
  }
});
