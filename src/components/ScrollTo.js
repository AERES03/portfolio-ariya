/** @format */

export default function ScrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });

  // 🔥 PAKSA URL TETAP "/"
  if (window.location.hash) {
    window.history.replaceState(null, "/", window.location.pathname);
  }
}
