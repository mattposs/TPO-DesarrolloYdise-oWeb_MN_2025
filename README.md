# 📸 Inti Fotografía – Sitio Web  
**Trabajo Práctico Obligatorio (TPO) – Diseño y Desarrollo Web – UADE 2025 (Comisión Martes Noche)**

---

## 🌅 Descripción general  

**Inti Fotografía** es un sitio web moderno y responsivo que representa un **local comercial de fotografía profesional**.  
Integra tienda online, carrito funcional, promociones dinámicas y servicios fotográficos.  

Combina diseño, funcionalidad e identidad visual inspirada en el **dios andino “Inti”**, símbolo de la **luz, la creatividad y la inspiración** — los tres ejes conceptuales de la fotografía.

---

## 🧱 Estructura del sitio  

```plaintext
📦 inti-fotografia
├── index.html         → Página principal (Inicio)
├── nosotros.html      → Historia y filosofía de la marca
├── camaras.html       → Tienda de cámaras y lentes
├── accesorios.html    → Accesorios fotográficos
├── cursos.html        → Cursos y capacitaciones
├── servicios.html     → Servicios fotográficos profesionales
├── bebes.html         → Fotografía infantil
├── contacto.html      → Formulario + mapa de ubicación
├── promociones.html   → Página de promociones con descuentos dinámicos (JS)
├── carrito.html       → Carrito funcional con LocalStorage
├── style.css          → Estilos generales y componentes visuales
├── cart.js            → Lógica del carrito y almacenamiento local
├── promociones.js     → Lógica de cálculo de descuentos y conexión con carrito
└── /img               → Carpeta de recursos visuales (logo, productos, cursos, etc.)
```

---

## 🎨 Diseño e identidad visual  

### 🎨 Paleta cromática  

| Color | Código | Significado |
|:--|:--|:--|
| 🔴 Rojo | `#D32F2F` | Energía y pasión |
| 🟠 Naranja | `#FB8C00` | Creatividad y dinamismo |
| 🔵 Azul | `#1976D2` | Confianza y profesionalismo |
| 🟣 Violeta | `#8E24AA` | Inspiración y elegancia |
| 🟢 Verde | `#7CB342` | Renovación y naturaleza |
| 🟦 Celeste | `#00ACC1` | Tecnología y frescura |

### 🖋 Tipografía  
**Roboto (Google Fonts)** – moderna, clara y adaptable a todos los tamaños de pantalla.

### 💎 Estilo visual  
- Barra de navegación centrada con **efecto Glass Blur** y botones redondeados.  
- Secciones con **cards flexibles y sombras suaves**.  
- **Hero principal** con degradado de color y CTA.  
- **Diseño responsive** para desktop, tablet y mobile.  
- **Logo oficial:** inspirado en el sol, con reflejo interno y brillo suave.

---

## ⚙️ Funcionalidades JavaScript  

### 🛒 Carrito de compras (`cart.js`)  
- Maneja los productos seleccionados desde todas las páginas del sitio.  
- Almacena los datos en **LocalStorage** bajo la clave `inti_cart_v1`.  
- Permite sumar, restar, eliminar y vaciar productos.  
- Calcula el subtotal y el total automáticamente.  

### 💰 Promociones dinámicas (`promociones.html` + `promociones.js`)  
Nueva sección implementada en la **tercera etapa del TPO** (Actividad JavaScript).  

#### ✅ Funciones principales:
- Permite seleccionar productos del catálogo con promociones activas.  
- Calcula descuentos automáticamente según el tipo de producto:  
  - 📚 **Cursos:** 2×1 (pagás uno, llevás dos)  
  - 📷 **Cámaras y lentes:** 10% de descuento pagando en efectivo  
  - 💾 **Tarjeta SD 128GB:** 50% en la segunda unidad  
- Muestra el total sin descuento, el descuento aplicado y el total final.  
- Integra el resultado al carrito principal con **almacenamiento persistente**.  
- Incluye **feedback visual** (botón verde de confirmación) y mensajes dinámicos.

#### 🧩 Ejemplo de flujo:  
1. El usuario selecciona un curso.  
2. El precio se completa automáticamente.  
3. Al calcular, aparece el descuento y el total final.  
4. Con “Agregar al carrito”, el producto se guarda con el descuento aplicado.  
5. En `carrito.html` se muestra correctamente el valor con promoción.

---

## 🧠 Tecnologías utilizadas  

| Tecnología | Uso |
|:--|:--|
| **HTML5** | Estructura semántica de todo el sitio |
| **CSS3** | Estilos, Flexbox, Grid, Glass Blur, animaciones y variables |
| **JavaScript (ES6)** | Funcionalidad del carrito y lógica de promociones |
| **LocalStorage API** | Persistencia de datos entre páginas |
| **GitHub Pages** | Publicación y hosting estático |
| **Figma** | Prototipado del diseño original |

---

## 🗺️ Mapa del sitio  

![Mapa del sitio – Inti Fotografía](./MAPA%20DEL%20SITIO.png)

---

## 🚀 Publicación  

- **Repositorio:** [https://github.com/mattposs/TPO-DesarrolloYdisenoWeb_MN_2025](https://github.com/mattposs/TPO-DesarrolloYdisenoWeb_MN_2025)  
- **Sitio online (GitHub Pages):** [https://mattposs.github.io/TPO-DesarrolloYdisenoWeb_MN_2025/](https://mattposs.github.io/TPO-DesarrolloYdisenoWeb_MN_2025/)  
- **Prototipo Figma:** [https://www.figma.com/design/Zb1vG25WncxJlMi5NacmjC/Inti-Fotografia](https://www.figma.com/design/Zb1vG25WncxJlMi5NacmjC/Inti-Fotografia?node-id=0-1&t=adR4r8GgzaXgB9UE-1)

---

## 📁 Documentación complementaria  

- 📄 Documento institucional con Introducción, Misión, Visión, Objetivo Estratégico y Conclusión.  
- 🧮 Actividad JavaScript Local Comercial – Implementación de promociones dinámicas.  
- 🗺️ Mapa del sitio visual en formato PNG (adjunto).  

---

## 🧑‍🎓 Autor  

**Matías Ezequiel Posse Presa**  
💻 UADE – Diseño y Desarrollo Web  
🕓 Comisión Martes Noche 2025  

---

## 💬 Conclusión  

El sitio **Inti Fotografía** combina un diseño moderno, responsive y visualmente atractivo  
con funcionalidades reales de interacción y persistencia de datos.  

La implementación de las **promociones dinámicas en JavaScript** representa la tercera etapa del proyecto,  
demostrando integración entre **HTML, CSS y JS** de manera coherente y profesional.  

> “Cada fotografía captura un instante, pero cada diseño refleja una idea.”  

---

© 2025 – *Inti Fotografía* | Desarrollado por **Matías Posse Presa**

