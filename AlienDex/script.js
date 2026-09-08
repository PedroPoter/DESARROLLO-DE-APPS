// ==========================================
// ELEMENTOS DEL DOM
// ==========================================

const alienForm = document.getElementById("alienForm");
const listaAliens = document.getElementById("listaAliens");
const contador = document.getElementById("contador");
const buscador = document.getElementById("buscador");

// ==========================================
// OBTENER DATOS GUARDADOS
// ==========================================

let aliens = JSON.parse(localStorage.getItem("aliens")) || [];


// ==========================================
// MOSTRAR CRIATURAS
// ==========================================

function mostrarAliens() {

    // Limpiamos el contenedor
    listaAliens.innerHTML = "";

    // Recorremos las criaturas guardadas
    aliens.forEach((alien) => {

        crearTarjeta(alien);
    });

    actualizarContador();
}


// ==========================================
// CREAR TARJETA
// ==========================================

function crearTarjeta(alien) {

    const tarjeta = document.createElement("div");

    tarjeta.classList.add("alien-card");

    tarjeta.innerHTML = `
        <h3>👽 ${alien.nombre}</h3>

        <p>
            <strong>Especie:</strong>
            <span class="dato-especie">${alien.especie}</span>
        </p>

        <p>
            <strong>Planeta:</strong>
            <span class="dato-planeta">${alien.planeta}</span>
        </p>

        <p>
            <strong>Nivel de peligro:</strong>
            <span class="dato-peligro">${alien.peligro}</span>
        </p>

        <div class="acciones">
            <button class="editar">Editar</button>
            <button class="eliminar">Eliminar</button>
        </div>
    `;

    listaAliens.appendChild(tarjeta);


    // ==========================================
    // ELIMINAR
    // ==========================================

    const botonEliminar = tarjeta.querySelector(".eliminar");

    botonEliminar.addEventListener("click", function () {

        aliens = aliens.filter((item) => item.id !== alien.id);

        guardarAliens();

        mostrarAliens();
    });


    // ==========================================
    // EDITAR
    // ==========================================

    const botonEditar = tarjeta.querySelector(".editar");

    botonEditar.addEventListener("click", function () {

        const nuevoNombre = prompt(
            "Ingrese el nuevo nombre:",
            alien.nombre
        );

        if (nuevoNombre === null || nuevoNombre.trim() === "") {
            return;
        }


        const nuevaEspecie = prompt(
            "Ingrese la nueva especie:",
            alien.especie
        );

        if (nuevaEspecie === null || nuevaEspecie.trim() === "") {
            return;
        }


        const nuevoPlaneta = prompt(
            "Ingrese el nuevo planeta:",
            alien.planeta
        );

        if (nuevoPlaneta === null || nuevoPlaneta.trim() === "") {
            return;
        }


        alien.nombre = nuevoNombre.trim();
        alien.especie = nuevaEspecie.trim();
        alien.planeta = nuevoPlaneta.trim();


        guardarAliens();

        mostrarAliens();
    });

}


// ==========================================
// GUARDAR EN LOCALSTORAGE
// ==========================================

function guardarAliens() {

    localStorage.setItem("aliens", JSON.stringify(aliens));
}


// ==========================================
// ACTUALIZAR CONTADOR
// ==========================================

function actualizarContador() {

    const cantidad = aliens.length;

    contador.textContent =
        `Criaturas registradas: ${cantidad}`;
}


// ==========================================
// REGISTRAR NUEVA CRIATURA
// ==========================================

alienForm.addEventListener("submit", function (evento) {

    evento.preventDefault();


    const nombre =
        document.getElementById("nombre").value.trim();

    const especie =
        document.getElementById("especie").value.trim();

    const planeta =
        document.getElementById("planeta").value.trim();

    const peligro =
        document.getElementById("peligro").value;


    const nuevaCriatura = {

        id: Date.now(),

        nombre: nombre,

        especie: especie,

        planeta: planeta,

        peligro: peligro
    };


    aliens.push(nuevaCriatura);

    guardarAliens();

    mostrarAliens();

    alienForm.reset();
});


// ==========================================
// BUSCADOR
// ==========================================

buscador.addEventListener("input", function () {

    const texto =
        buscador.value.toLowerCase().trim();

    const tarjetas =
        listaAliens.children;


    for (let tarjeta of tarjetas) {

        const contenido =
            tarjeta.textContent.toLowerCase();

        if (contenido.includes(texto)) {

            tarjeta.style.display = "block";

        } else {

            tarjeta.style.display = "none";
        }
    }
});


// ==========================================
// CARGAR DATOS AL ABRIR LA PÁGINA
// ==========================================

mostrarAliens();