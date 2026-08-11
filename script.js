const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

toggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".site-nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
