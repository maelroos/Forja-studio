/* =========================================================
   FORJA STUDIO — Base de datos local de productos
   =========================================================
   Para agregar un producto nuevo: copia un objeto, cámbiale
   el "id" (único, sin espacios, se usa en la URL) y sus datos.
   Aparecerá automáticamente en el catálogo, en su propia
   página y en "productos relacionados". No toques el HTML.

   Carpeta de imágenes sugerida: img/productos/<id>/1.jpg, 2.jpg...
   ========================================================= */

const PRODUCTS = [
  {
    id: "polo-bividi-deportivo",
    nombre: "Polo Bividi Deportivo Negro para Hombre",
    precio: 35,
    precioAntes: 45,
    categoria: "Polos",
    descripcion:
      "Luce un estilo moderno y versátil con este polo bividi negro para hombre. Diseñado para brindar comodidad y libertad de movimiento, cuenta con un ajuste slim fit que realza la silueta sin sacrificar confort. Su tejido suave y transpirable ofrece una sensación agradable durante todo el día, ya sea para entrenar, salir o complementar un look casual. El diseño minimalista y el color negro clásico lo convierten en una prenda imprescindible en cualquier guardarropa.",
    caracteristicas: [
      "Costuras reforzadas para mayor durabilidad",
      "Ideal para gimnasio, entrenamiento, actividades deportivas y uso casual",
      "Fácil de combinar con jeans, joggers o shorts",
      "Acabado de alta calidad",
    ],
    imagenes: [
      "img/productos/polo-bividi-deportivo/1.png",
      "img/productos/polo-bividi-deportivo/2.png",
    ],
    tallas: ["XL"],
    colores: [{ nombre: "Negro", hex: "#141311" }],
    stock: 24,
    etiquetas: ["nuevo", "básico"],
  },
  {
    id: "polo-compresivo",
    nombre: "Polo Deportivo Compresivo",
    precio: 37,
    precioAntes: 48,
    categoria: "Polos",
    descripcion:
      "La misma construcción del Esencial Negro, en un tono tierra cálido que combina con toda la cápsula. Ideal para uso diario dentro y fuera del gimnasio.",
    caracteristicas: [
      "Tela ligera, suave y cómoda al contacto con la piel.",
      "Elasticidad que permite libertad de movimiento",
      "Fácil de lavar y de rápido secado.",
      "Ajuste compresivo y ergonómico.",
    ],
    imagenes: [
      "img/productos/polo-compresivo/1.png",
      "img/productos/polo-compresivo/3.png",
      "img/productos/polo-compresivo/2.png",
      "img/productos/polo-compresivo/4.png",
    ],
    tallas: ["M"],
    colores: [{ nombre: "Negro azulado", hex: "#0D1117" }],
    stock: 18,
    etiquetas: ["nuevo"],
  },
  {
    id: "polo-oversize-power",
    nombre: "Polo Oversize Power Gym",
    precio: 37,
    precioAntes: 50,
    categoria: "Polos",
    descripcion:
      "Lleva tu estilo fitness al siguiente nivel con el Polo Oversize Power Gym Negro Lavado Vintage, una prenda diseñada para quienes viven la pasión por el entrenamiento dentro y fuera del gimnasio. Su acabado efecto lavado le aporta un aspecto urbano y moderno, mientras que su corte oversize brinda comodidad, libertad de movimiento y una presencia imponente.",
    caracteristicas: [
      "Algodón peinado 100%, 220 g/m²",
      "Cuello reforzado anti-deformación",
      "Costuras dobles en hombros",
      "Corte regular — cae recto, sin ceñir",
    ],
    imagenes: [
      "img/productos/polo-oversize-power/1.png",
      "img/productos/polo-oversize-power/2.png",
      "img/productos/polo-oversize-power/3.png",
      "img/productos/polo-oversize-power/4.png",
    ],
    tallas: ["M"],
    colores: [{ nombre: "Negro Vintage", hex: "#2B2B2B" }],
    stock: 15,
    etiquetas: ["nuevo"],
  },

  /*polo 4 */
  {
    id: "polo-compresivo-azul",
    nombre: "Polo Deportivo Compresivo Hombre Azul Marino",
    precio: 40,
    precioAntes: 50,
    categoria: "Polos",
    descripcion:
      "Potencia tu rendimiento con este polo deportivo compresivo diseñado para brindar comodidad, libertad de movimiento y un ajuste atlético que se adapta naturalmente al cuerpo. Su tejido ligero y flexible ayuda a mantener una sensación fresca durante entrenamientos, actividades deportivas o el uso diario. El diseño minimalista en color azul marino aporta un estilo moderno y versátil, ideal para combinar con prendas deportivas o casuales. Gracias a sus costuras reforzadas y acabado de alta calidad, ofrece durabilidad, confort y una apariencia impecable en cualquier ocasión.",
    caracteristicas: [
      "Tela: Ligera, flexible y de secado rápido.",
      "Sensación: Suave y cómoda al contacto con la piel.",
      "Transpirabilidad: Favorece la ventilación y el confort durante la actividad física.",
      "Elasticidad: Permite libertad de movimiento.",
    ],
    imagenes: [
      "img/productos/polo-compresivo-azul/1.png",
      "img/productos/polo-compresivo-azul/3.png",
      "img/productos/polo-compresivo-azul/2.png",
      "img/productos/polo-compresivo-azul/4.png",
    ],
    tallas: ["S", "M", "L", "XL"],
    colores: [{ nombre: "Azul Marino Profundo", hex: "#1D2B52" }],
    stock: 9,
    etiquetas: ["temporada", "oferta"],
  },

  {
    id: "polo-oversize-urban",
    nombre: "Polo Oversize Urban Graphic gris",
    precio: 37,
    precioAntes: 50,
    categoria: "Polos",
    descripcion:
      "Potencia tu rendimiento con este polo deportivo compresivo diseñado para brindar comodidad, libertad de movimiento y un ajuste atlético que se adapta naturalmente al cuerpo. Su tejido ligero y flexible ayuda a mantener una sensación fresca durante entrenamientos, actividades deportivas o el uso diario. El diseño minimalista en color azul marino aporta un estilo moderno y versátil, ideal para combinar con prendas deportivas o casuales. Gracias a sus costuras reforzadas y acabado de alta calidad, ofrece durabilidad, confort y una apariencia impecable en cualquier ocasión.",
    caracteristicas: [
      "Tela: Ligera, flexible y de secado rápido.",
      "Sensación: Suave y cómoda al contacto con la piel.",
      "Transpirabilidad: Favorece la ventilación y el confort durante la actividad física.",
      "Elasticidad: Permite libertad de movimiento.",
    ],
    imagenes: [
      "img/productos/polo-oversize-urban/1.png",
      "img/productos/polo-oversize-urban/2.png",
      "img/productos/polo-oversize-urban/3.png",
      "img/productos/polo-oversize-urban/4.png",
    ],
    tallas: ["L"],
    colores: [{ nombre: "gris", hex: "#aeb1b9" }],
    stock: 9,
    etiquetas: ["temporada", "oferta"],
  },

  {
    id: "polo-oversize-urban-1",
    nombre: "Polo Oversize Urban Graphic Celeste",
    precio: 37,
    precioAntes: 50,
    categoria: "Polos",
    descripcion:
      "Potencia tu rendimiento con este polo deportivo compresivo diseñado para brindar comodidad, libertad de movimiento y un ajuste atlético que se adapta naturalmente al cuerpo. Su tejido ligero y flexible ayuda a mantener una sensación fresca durante entrenamientos, actividades deportivas o el uso diario. El diseño minimalista en color azul marino aporta un estilo moderno y versátil, ideal para combinar con prendas deportivas o casuales. Gracias a sus costuras reforzadas y acabado de alta calidad, ofrece durabilidad, confort y una apariencia impecable en cualquier ocasión.",
    caracteristicas: [
      "Tela: Ligera, flexible y de secado rápido.",
      "Sensación: Suave y cómoda al contacto con la piel.",
      "Transpirabilidad: Favorece la ventilación y el confort durante la actividad física.",
      "Elasticidad: Permite libertad de movimiento.",
    ],
    imagenes: [
      "img/productos/polo-oversize-urban-1/1.png",
      "img/productos/polo-oversize-urban-1/2.png",
      "img/productos/polo-oversize-urban-1/3.png",
      "img/productos/polo-oversize-urban-1/4.png",
    ],
    tallas: ["L"],
    colores: [{ nombre: "Celeste", hex: "#7ae0ee" }],
    stock: 9,
    etiquetas: ["temporada", "oferta"],
  },

  {
    id: "joggers",
    nombre: "Pantalón Deportivo Wide Leg Gris Oscuro",
    precio: 40,
    precioAntes: 55,
    categoria: "Joggers",
    descripcion:
      "Disfruta de un estilo moderno y cómodo con este pantalón deportivo Wide Leg para hombre. Su corte amplio proporciona una caída natural y un ajuste relajado que ofrece libertad de movimiento durante todo el día. Está confeccionado en una tela suave al tacto que brinda comodidad sin sacrificar resistencia.",
    caracteristicas: [
      "Cintura elástica para mayor comodidad.",
      "Cordón ajustable en la cintura.",
      "Tela suave, resistente y cómoda para uso diario.",
      "Ideal para uso casual, urbano, entrenamiento ligero o descanso.",
    ],
    imagenes: [
      "img/productos/joggers/1.png",
      "img/productos/joggers/2.png",
      "img/productos/joggers/3.png",
      "img/productos/joggers/4.png",
    ],
    tallas: ["S"],
    colores: [{ nombre: "Gris Oscuro", hex: "#565453" }],
    stock: 12,
    etiquetas: ["nuevo", "oferta"],
  },

  /*
  {
    id: "hoodie-crudo",
    nombre: "Hoodie Crudo",
    precio: 189,
    precioAntes: null,
    categoria: "Hoodies",
    descripcion:
      "Versión clara de nuestro hoodie insignia. Felpa sin blanquear, más cercana al algodón crudo, con la misma construcción reforzada.",
    caracteristicas: [
      "Felpa perchada 340 g/m², interior cepillado",
      "Capucha de tres piezas con cordón plano",
      "Bolsillo canguro reforzado",
      "Puños y basta con elastano — no se abren",
    ],
    imagenes: [
      "img/productos/hoodie-crudo/1.svg",
      "img/productos/hoodie-crudo/2.svg",
    ],
    tallas: ["S", "M", "L", "XL"],
    colores: [{ nombre: "Crudo", hex: "#c9bfa8" }],
    stock: 7,
    etiquetas: ["nuevo"],
  },
  {
    id: "jogger-negro",
    nombre: "Jogger Técnico Negro",
    precio: 159,
    precioAntes: null,
    categoria: "Joggers",
    descripcion:
      "Jogger de tejido técnico con puño ajustable y bolsillos con cierre. Se mueve contigo sin perder línea recta al caminar.",
    caracteristicas: [
      "Tejido técnico 4-way stretch",
      "Bolsillos laterales y trasero con cierre",
      "Puño y cintura ajustables",
      "Tratamiento repelente al agua ligero",
    ],
    imagenes: [
      "img/productos/jogger-negro/1.svg",
      "img/productos/jogger-negro/2.svg",
    ],
    tallas: ["S", "M", "L", "XL"],
    colores: [{ nombre: "Negro", hex: "#141311" }],
    stock: 20,
    etiquetas: ["básico"],
  },
  {
    id: "jogger-grafito",
    nombre: "Jogger Técnico Grafito",
    precio: 159,
    precioAntes: null,
    categoria: "Joggers",
    descripcion:
      "La misma construcción técnica del Jogger Negro en un grafito versátil, fácil de combinar con toda la cápsula.",
    caracteristicas: [
      "Tejido técnico 4-way stretch",
      "Bolsillos laterales y trasero con cierre",
      "Puño y cintura ajustables",
      "Tratamiento repelente al agua ligero",
    ],
    imagenes: [
      "img/productos/jogger-grafito/1.svg",
      "img/productos/jogger-grafito/2.svg",
    ],
    tallas: ["S", "M", "L"],
    colores: [{ nombre: "Grafito", hex: "#3a3936" }],
    stock: 5,
    etiquetas: [],
  },
  {
    id: "casaca-forja",
    nombre: "Casaca Cortavientos Forja",
    precio: 229,
    precioAntes: 259,
    categoria: "Casacas",
    descripcion:
      "Pieza insignia de la colección. Cortavientos con costuras selladas, forro de malla ligera y capucha empacable en el cuello.",
    caracteristicas: [
      "Exterior repelente al agua, costuras selladas",
      "Forro interior de malla ligera",
      "Capucha empacable integrada al cuello",
      "Cierre frontal YKK con solapa cortaviento",
    ],
    imagenes: [
      "img/productos/casaca-forja/1.svg",
      "img/productos/casaca-forja/2.svg",
    ],
    tallas: ["M", "L", "XL"],
    colores: [{ nombre: "Óxido oscuro", hex: "#3a1f12" }],
    stock: 6,
    etiquetas: ["destacado", "oferta"],
  },
  {
    id: "gorra-ember",
    nombre: "Gorra Bordada Ember",
    precio: 79,
    precioAntes: null,
    categoria: "Accesorios",
    descripcion:
      "Gorra estructurada de 6 paneles con bordado tono sobre tono y cierre trasero de metal ajustable.",
    caracteristicas: [
      "Estructura de 6 paneles, visera curva",
      "Bordado tono sobre tono",
      "Cierre trasero de metal ajustable",
      "Talla única",
    ],
    imagenes: [
      "img/productos/gorra-ember/1.svg",
      "img/productos/gorra-ember/2.svg",
    ],
    tallas: ["Única"],
    colores: [{ nombre: "Óxido", hex: "#4a2010" }],
    stock: 30,
    etiquetas: ["accesorio"],
  },*/
];