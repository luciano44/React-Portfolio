export function fadeToTop(elementClass) {
  const el = document.querySelector(elementClass);
  el.style.opacity = "1";
  el.style.top = "0";
}
