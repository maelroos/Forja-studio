/* =========================================================
   FORJA STUDIO — ficha de producto (producto.html)
   Todo el contenido se arma leyendo products.js según el
   parámetro ?id= de la URL. No crear un HTML por producto.
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("productRoot");
  if (!root) return; // esta página no es una ficha de producto

  const id = getQueryParam("id");
  const product = id ? getProductById(id) : null;

  if (!product) {
    renderNotFound(root);
    return;
  }

  document.title = `${product.nombre} — FORJA STUDIO`;
  let selectedTalla = product.tallas[0] || null;
  let selectedColor = product.colores[0]?.nombre || null;
  let activeImage = 0;

  root.innerHTML = `
    <nav class="breadcrumb mono reveal">
      <a href="index.html">Tienda</a> <span>/</span>
      <a href="index.html#catalogo">${escapeHTML(product.categoria)}</a> <span>/</span>
      <span>${escapeHTML(product.nombre)}</span>
    </nav>

    <div class="product-detail reveal">
      <div class="gallery">
        <div class="gallery-main">
          <span class="card-badge${product.etiquetas.includes("oferta") ? " card-badge--sale" : ""}" ${
    product.etiquetas.includes("oferta") || product.etiquetas.includes("nuevo") ? "" : "hidden"
  }>${product.etiquetas.includes("oferta") ? "Oferta" : "Nuevo"}</span>
          <img id="galleryMainImg" src="${product.imagenes[0]}" alt="${escapeHTML(product.nombre)}">
        </div>
        <div class="gallery-thumbs" id="galleryThumbs">
          ${product.imagenes
            .map(
              (img, i) =>
                `<button type="button" class="thumb${i === 0 ? " is-active" : ""}" data-i="${i}">
                   <img src="${img}" alt="${escapeHTML(product.nombre)} — vista ${i + 1}">
                 </button>`
            )
            .join("")}
        </div>
      </div>

      <div class="product-info">
        <span class="cat mono">${escapeHTML(product.categoria)}</span>
        <h1>${escapeHTML(product.nombre)}</h1>
        <div class="price-group price-group--lg">
          <span class="price">${formatPrice(product.precio)}</span>
          ${product.precioAntes ? `<span class="price-before">${formatPrice(product.precioAntes)}</span>` : ""}
        </div>
        <p class="product-desc">${escapeHTML(product.descripcion)}</p>

        <div class="option-block">
          <span class="option-label">Color — <b id="selColor">${escapeHTML(selectedColor || "")}</b></span>
          <div class="swatches" id="colorSwatches">
            ${product.colores
              .map(
                (c, i) =>
                  `<button type="button" class="swatch${i === 0 ? " is-active" : ""}" data-color="${escapeHTML(
                    c.nombre
                  )}" style="--sw:${c.hex}" aria-label="${escapeHTML(c.nombre)}"></button>`
              )
              .join("")}
          </div>
        </div>

        <div class="option-block">
          <span class="option-label">Talla — <b id="selTalla">${escapeHTML(selectedTalla || "")}</b></span>
          <div class="size-options" id="sizeOptions">
            ${product.tallas
              .map(
                (t, i) =>
                  `<button type="button" class="size-btn${i === 0 ? " is-active" : ""}" data-talla="${escapeHTML(t)}">${escapeHTML(t)}</button>`
              )
              .join("")}
          </div>
        </div>

        <p class="stock-note mono">${stockLabel(product.stock)}</p>

        <div class="btn-row">
          <a href="#" id="productWaBtn" class="btn btn-primary">Comprar por WhatsApp</a>
        </div>

        <div class="features">
          <span class="option-label">Características</span>
          <ul>
            ${product.caracteristicas.map((f) => `<li>${escapeHTML(f)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;

  // Galería: click en miniatura
  root.querySelectorAll(".thumb").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeImage = Number(btn.getAttribute("data-i"));
      document.getElementById("galleryMainImg").src = product.imagenes[activeImage];
      root.querySelectorAll(".thumb").forEach((b) => b.classList.toggle("is-active", b === btn));
    });
  });

  // Selección de color
  root.querySelectorAll(".swatch").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedColor = btn.getAttribute("data-color");
      document.getElementById("selColor").textContent = selectedColor;
      root.querySelectorAll(".swatch").forEach((b) => b.classList.toggle("is-active", b === btn));
      updateWaLink();
    });
  });

  // Selección de talla
  root.querySelectorAll(".size-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedTalla = btn.getAttribute("data-talla");
      document.getElementById("selTalla").textContent = selectedTalla;
      root.querySelectorAll(".size-btn").forEach((b) => b.classList.toggle("is-active", b === btn));
      updateWaLink();
    });
  });

  function updateWaLink() {
    const btn = document.getElementById("productWaBtn");
    btn.setAttribute(
      "href",
      buildWhatsAppLink(product, { talla: selectedTalla, color: selectedColor })
    );
    btn.setAttribute("target", "_blank");
    btn.setAttribute("rel", "noopener");
  }
  updateWaLink();

  renderRelated(product);
  observeReveals();
});

function stockLabel(stock) {
  if (stock === undefined || stock === null) return "";
  if (stock <= 0) return "Sin stock por ahora";
  if (stock <= 6) return `Quedan pocas unidades (${stock})`;
  return "Disponible para envío inmediato";
}

function renderNotFound(root) {
  root.innerHTML = `
    <div class="not-found reveal">
      <span class="tag-mono">404</span>
      <h1>No encontramos ese producto</h1>
      <p>Puede que el enlace esté mal escrito o el producto ya no esté disponible.</p>
      <a href="index.html" class="btn btn-primary">Volver a la tienda</a>
    </div>`;
  observeReveals();
}

function renderRelated(product) {
  const section = document.getElementById("relatedSection");
  const grid = document.getElementById("relatedGrid");
  if (!section || !grid) return;
  const related = getRelatedProducts(product, 4);
  if (related.length === 0) {
    section.hidden = true;
    return;
  }
  grid.innerHTML = related
    .map(
      (p) => `
      <article class="product-card reveal">
        <a href="${productURL(p.id)}" class="product-media" aria-label="Ver ${escapeHTML(p.nombre)}">
          <img class="product-image" src="${p.imagenes[0]}" alt="${escapeHTML(p.nombre)}" loading="lazy">
        </a>
        <div class="product-body">
          <span class="cat mono">${escapeHTML(p.categoria)}</span>
          <h4><a href="${productURL(p.id)}">${escapeHTML(p.nombre)}</a></h4>
          <div class="product-footer">
            <span class="price">${formatPrice(p.precio)}</span>
            <a href="${productURL(p.id)}" class="buy-btn">Ver producto</a>
          </div>
        </div>
      </article>`
    )
    .join("");
}

function observeReveals() {
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
  document.querySelectorAll(".reveal:not(.in-view)").forEach((el) => observer.observe(el));
}
