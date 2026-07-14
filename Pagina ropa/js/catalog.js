/* =========================================================
   FORJA STUDIO — renderizado del catálogo (index.html)
   Lee exclusivamente de PRODUCTS (products.js). No editar
   productos aquí: este archivo solo pinta lo que reciba.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("catalogGrid");
  if (!grid) return; // esta página no tiene catálogo

  const filtersEl = document.getElementById("catalogFilters");
  const emptyEl = document.getElementById("catalogEmpty");
  let activeCategory = "Todo";

  function productCard(p) {
    const badge = p.etiquetas.includes("oferta")
      ? '<span class="card-badge card-badge--sale">Oferta</span>'
      : p.etiquetas.includes("nuevo")
      ? '<span class="card-badge">Nuevo</span>'
      : "";
    const priceBlock = p.precioAntes
      ? `<span class="price">${formatPrice(p.precio)}</span>
         <span class="price-before">${formatPrice(p.precioAntes)}</span>`
      : `<span class="price">${formatPrice(p.precio)}</span>`;

    return `
      <article class="product-card reveal">
        <a href="${productURL(p.id)}" class="product-media" aria-label="Ver ${escapeHTML(p.nombre)}">
          ${badge}
          <img class="product-image img-primary" src="${p.imagenes[0]}" alt="${escapeHTML(p.nombre)}" loading="lazy">
          ${p.imagenes[1] ? `<img class="product-image img-secondary" src="${p.imagenes[1]}" alt="" loading="lazy">` : ""}
        </a>
        <div class="product-body">
          <span class="cat mono">${escapeHTML(p.categoria)}</span>
          <h4><a href="${productURL(p.id)}">${escapeHTML(p.nombre)}</a></h4>
          <div class="product-footer">
            <span class="price-group">${priceBlock}</span>
            <a href="${productURL(p.id)}" class="buy-btn">Ver producto</a>
          </div>
        </div>
      </article>`;
  }

  function render() {
    const products = getAllProducts().filter(
      (p) => activeCategory === "Todo" || p.categoria === activeCategory
    );
    grid.innerHTML = products.map(productCard).join("");
    if (emptyEl) emptyEl.hidden = products.length !== 0;

    // Reveal on scroll para las tarjetas recién insertadas
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
    grid.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  function renderFilters() {
    if (!filtersEl) return;
    const categories = ["Todo", ...getCategories()];
    filtersEl.innerHTML = categories
      .map(
        (c) =>
          `<button type="button" class="filter-btn${
            c === activeCategory ? " is-active" : ""
          }" data-cat="${escapeHTML(c)}">${escapeHTML(c)}</button>`
      )
      .join("");

    filtersEl.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        activeCategory = btn.getAttribute("data-cat");
        filtersEl
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.toggle("is-active", b === btn));
        render();
      });
    });
  }

  renderFilters();
  render();
});
