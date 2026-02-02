// Mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", String(!isOpen));
    mobileNav.classList.toggle("hidden");
  });

  // close menu when clicking a link
  mobileNav.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => {
      mobileNav.classList.add("hidden");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const btn = item.querySelector(".faq-btn");
  const panel = item.querySelector(".faq-panel");
  const icon = item.querySelector(".faq-icon");

  if (!btn || !panel) return;

  btn.addEventListener("click", () => {
    const expanded = btn.getAttribute("aria-expanded") === "true";

    // close others (nice UX)
    document.querySelectorAll(".faq-item").forEach((other) => {
      const ob = other.querySelector(".faq-btn");
      const op = other.querySelector(".faq-panel");
      const oi = other.querySelector(".faq-icon");
      if (ob && op && other !== item) {
        ob.setAttribute("aria-expanded", "false");
        op.classList.add("hidden");
        if (oi) oi.textContent = "+";
      }
    });

    btn.setAttribute("aria-expanded", String(!expanded));
    panel.classList.toggle("hidden");
    if (icon) icon.textContent = expanded ? "+" : "–";
  });
});

// Footer year
const year = document.getElementById("year");
if (year) year.textContent = String(new Date().getFullYear());
