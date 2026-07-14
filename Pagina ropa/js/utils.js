/* =========================================================
   FORJA STUDIO — utilidades compartidas
   ========================================================= */

const STORE = {
  whatsappNumber: "51951150378", // código país + número, sin + ni espacios
  moneda: "S/",
};

/** Formatea un número como precio: 119 -> "S/ 119" */
function formatPrice(amount) {
  return `${STORE.moneda} ${Number(amount).toFixed(0)}`;
}

/** Devuelve todos los productos */
function getAllProducts() {
  return PRODUCTS;
}

/** Busca un producto por id */
function getProductById(id) {
  return PRODUCTS.find((p) => p.id === id) || null;
}

/** Devuelve productos de la misma categoría, excluyendo el actual */
function getRelatedProducts(product, limit = 4) {
  return PRODUCTS.filter(
    (p) => p.id !== product.id && p.categoria === product.categoria
  ).slice(0, limit);
}

/** Lista única de categorías presentes en el catálogo, en orden de aparición */
function getCategories() {
  const seen = [];
  PRODUCTS.forEach((p) => {
    if (!seen.includes(p.categoria)) seen.push(p.categoria);
  });
  return seen;
}

/** Lee un parámetro de la URL actual */
function getQueryParam(name) {
  return new URLSearchParams(window.location.search).get(name);
}

/** Construye el link de WhatsApp con mensaje pre-armado para un producto */
function buildWhatsAppLink(product, opts = {}) {
  const talla = opts.talla ? ` — Talla ${opts.talla}` : "";
  const color = opts.color ? ` — Color ${opts.color}` : "";
  const msg = product
    ? `Hola, quiero pedir: ${product.nombre}${talla}${color} (${formatPrice(
        product.precio
      )})`
    : "Hola, vi la tienda y quiero más información";
  return `https://wa.me/${STORE.whatsappNumber}?text=${encodeURIComponent(
    msg
  )}`;
}

/** Escapa HTML básico para evitar inyección al interpolar texto de datos */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/** URL a la ficha de un producto */
function productURL(id) {
  return `producto.html?id=${encodeURIComponent(id)}`;
}
