// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile nav toggle
const toggle = document.getElementById("navToggle");
const links = document.querySelector(".nav__links");
toggle.addEventListener("click", () => {
  const open = links.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
links.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    links.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }
});

// Solidify nav background on scroll
const nav = document.getElementById("nav");
const onScroll = () => {
  nav.style.background = window.scrollY > 40
    ? "rgba(11, 16, 32, 0.92)"
    : "rgba(11, 16, 32, 0.72)";
};
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });

// Reveal-on-scroll animation
const revealTargets = document.querySelectorAll(
  ".section__head, .about, .card, .timeline__item, .teaching, .contact__card"
);
revealTargets.forEach((el) => el.setAttribute("data-reveal", ""));

if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  revealTargets.forEach((el) => io.observe(el));
} else {
  revealTargets.forEach((el) => el.classList.add("is-visible"));
}
