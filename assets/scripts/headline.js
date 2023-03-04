const REV = 0;

const randomColor = (currentColor = null) => {
  const COLORS = ["#fdfd96", "#c3b1e1"];

  if (COLORS.length === 1) return COLORS[0];

  let color;
  while (!color || color === currentColor) {
    color = COLORS[Math.floor(Math.random() * COLORS.length)];
  }

  return color;
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("rev") != REV) {
    localStorage.clear();
    localStorage.setItem("rev", REV);
  }

  const el = document.getElementById("headline");
  (el.onclick = () => {
    const color = randomColor(localStorage.getItem("color"));
    localStorage.setItem("color", color);
    el.style.color = color;
  })();
});
