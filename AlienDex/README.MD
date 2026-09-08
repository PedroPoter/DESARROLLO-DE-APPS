AlienDex

Registro Interactivo de Criaturas Extraterrestres

**AlienDex** es una aplicación web desarrollada con HTML, CSS y JavaScript que permite registrar, consultar, editar y eliminar información de criaturas extraterrestres.

El proyecto fue creado con el objetivo de demostrar el uso de JavaScript para la **manipulación del DOM (Document Object Model)**.

Funcionalidades

* Registrar nuevas criaturas.
* Mostrar las criaturas registradas dinámicamente.
* Editar información de las criaturas.
* Eliminar criaturas.
* Buscar criaturas mediante un buscador.
* Mostrar un contador de criaturas registradas.
* Guardar la información utilizando `localStorage`.
* Diseño adaptable para diferentes tamaños de pantalla.

Tecnologías utilizadas

* **HTML5** — Estructura de la aplicación.
* **CSS3** — Diseño y estilos.
* **JavaScript** — Lógica y manipulación del DOM.
* **LocalStorage** — Persistencia de los datos en el navegador.
* **Visual Studio Code** — Entorno de desarrollo.
* **Git** — Control de versiones.
* **GitHub** — Repositorio del proyecto.

Estructura del proyecto

```text
AlienDex/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

Conceptos de DOM utilizados

Durante el desarrollo se utilizaron diferentes métodos y propiedades del DOM, entre ellos:

```javascript
document.getElementById()
document.querySelector()
document.createElement()
element.appendChild()
element.addEventListener()
element.textContent
element.innerHTML
element.classList
element.remove()
```

Estos permiten localizar, crear, modificar y eliminar elementos de la página dinámicamente.

Almacenamiento

AlienDex utiliza `localStorage` para conservar las criaturas registradas incluso después de actualizar o cerrar el navegador.

Los datos son convertidos a formato JSON para poder almacenarlos y posteriormente recuperarlos.

Ejecución

Para ejecutar el proyecto:

1. Descargar o clonar el repositorio.
2. Abrir la carpeta `AlienDex` en Visual Studio Code.
3. Abrir `index.html` utilizando **Live Server**.
4. Utilizar el formulario para registrar las criaturas.

Objetivo académico

El propósito principal de este proyecto es demostrar el funcionamiento práctico del **DOM mediante JavaScript**, desarrollando una aplicación interactiva donde los elementos HTML son modificados dinámicamente según las acciones del usuario.

Autor

Proyecto académico desarrollado por **Eric**.
