export function moveFocusToMain(doc = document, view = window) {
  const main = doc.getElementById("main-content");
  if (!main) return false;
  main.scrollIntoView({ block: "start", behavior: "auto" });
  view.requestAnimationFrame(() => main.focus({ preventScroll: true }));
  return true;
}
