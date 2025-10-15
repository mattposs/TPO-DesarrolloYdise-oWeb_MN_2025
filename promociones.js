/* Inti Fotografía – Promociones conectadas con carrito (versión final optimizada) */
(() => {
  const STORAGE_KEY = 'inti_cart_v1';
  const $ = (sel) => document.querySelector(sel);

  // --- Catálogo con precios e imágenes reales ---
  const productos = {
    celular: { name: "Curso Fotografía con Celular", price: 15000, img: "./img/curso-fotografia-movil.jpg", promo: "2x1" },
    digital: { name: "Curso Fotografía Digital", price: 30000, img: "./img/cursofotografíadigital.jpg", promo: "2x1" },
    analogica: { name: "Curso Fotografía Analógica", price: 35000, img: "./img/cursofotografíaanalogica.jpg", promo: "2x1" },
    social: { name: "Curso Fotografía Social y Deportiva", price: 40000, img: "./img/cursofotografíadeportiva.jpg", promo: "2x1" },
    reflex: { name: "Cámara Reflex Pro", price: 250000, img: "./img/Cámara Reflex Pro.png", promo: "10%" },
    mirrorless: { name: "Cámara Mirrorless", price: 220000, img: "./img/camaramirrorless.png", promo: "10%" },
    lente50: { name: "Lente 50mm", price: 70000, img: "./img/lente50mm.jpg", promo: "10%" },
    zoom70: { name: "Lente Zoom 70-200", price: 150000, img: "./img/lentezoom70-200.png", promo: "10%" },
    sd128: { name: "Tarjeta SD 128GB", price: 8000, img: "./img/memoria sd128.png", promo: "50%" }
  };

  // --- Mostrar precio al seleccionar producto ---
  $('#producto').addEventListener('change', (e) => {
    const key = e.target.value;
    const p = productos[key];
    $('#precio').value = p ? p.price : '';
    $('#resultado').style.display = 'none';
  });

  // --- Calcular promoción ---
  $('#promoForm').addEventListener('submit', (e) => {
    e.preventDefault(); // Evita refrescar la página

    const key = $('#producto').value;
    const cantidad = parseInt($('#cantidad').value);

    if (!key || cantidad <= 0) {
      alert("Seleccioná un producto y una cantidad válida.");
      return;
    }

    const prod = productos[key];
    let totalSinDesc = prod.price * cantidad;
    let descuento = 0;
    let mensaje = "";

    // Cálculo del descuento según tipo de producto
    if (prod.promo === "2x1") {
      descuento = Math.floor(cantidad / 2) * prod.price;
      mensaje = "Promoción 2x1 aplicada. Pagás solo la mitad de los cursos.";
    } else if (prod.promo === "10%") {
      descuento = totalSinDesc * 0.10;
      mensaje = "10 % de descuento pagando en efectivo.";
    } else if (prod.promo === "50%") {
      if (cantidad >= 2) {
        descuento = Math.floor(cantidad / 2) * (prod.price * 0.5);
        mensaje = "50 % de descuento en la segunda unidad.";
      } else {
        mensaje = "Agregá al menos 2 unidades para activar la promoción.";
      }
    }

    const totalFinal = totalSinDesc - descuento;

    // Mostrar resultados en pantalla
    $('#resultado').style.display = 'block';
    $('#totalSinDescuento').textContent = `Total sin descuento: $${totalSinDesc.toLocaleString('es-AR')}`;
    $('#descuentoAplicado').textContent = `Descuento aplicado: $${descuento.toLocaleString('es-AR')}`;
    $('#totalFinal').textContent = `Total final: $${totalFinal.toLocaleString('es-AR')}`;
    $('#mensajeExtra').textContent = mensaje;

    // --- Agregar al carrito con descuento incluido ---
    const btnAdd = $('#agregarCarrito');
    btnAdd.style.display = 'inline-block';
    btnAdd.onclick = () => {
      let cart = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

      const existing = cart.find((i) => i.id === key);
      if (existing) {
        existing.qty += cantidad;
        existing.discountedTotal = (existing.price * existing.qty) - descuento;
      } else {
        cart.push({
          id: key,
          name: prod.name,
          price: prod.price,
          img: prod.img,
          qty: cantidad,
          discountedTotal: totalFinal
        });
      }

      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));

      // Feedback visual
      btnAdd.textContent = "✓ Agregado al carrito con descuento";
      btnAdd.style.background = "var(--verde)";
      setTimeout(() => {
        btnAdd.textContent = "Agregar al carrito";
        btnAdd.style.background = "var(--azul)";
      }, 1500);
    };
  });
})();
