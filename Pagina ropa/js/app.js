/* =========================================================
   FORJA STUDIO — comportamiento global del sitio
   (nav, menú móvil, año, WhatsApp flotante, reveal on scroll)
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  // Año dinámico en footer
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // WhatsApp flotante + genéricos sin producto asociado
  document.querySelectorAll(".wa-generic").forEach((el) => {
    el.setAttribute("href", buildWhatsAppLink(null));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  // Menú móvil
  const burger = document.getElementById("burgerBtn");
  const navLinks = document.querySelector(".nav-links");
  if (burger && navLinks) {
    burger.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("is-open");
      burger.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => navLinks.classList.remove("is-open"))
    );
  }

  // Reveal on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Header con sombra al hacer scroll
  const header = document.querySelector("header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 12);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }
});
