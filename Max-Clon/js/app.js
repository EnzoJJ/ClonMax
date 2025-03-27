document.addEventListener("DOMContentLoaded", function () {
    const recomendaciones = document.querySelectorAll(".recomendacion");
    const flechaIzquierda = document.querySelector("#recomendaciones .flecha.izquierda");
    const flechaDerecha = document.querySelector("#recomendaciones .flecha.derecha");
    
    let indiceActual = 0;
    let intervalo;

    function actualizarFlechas() {
        flechaIzquierda.style.display = indiceActual === 0 ? "none" : "block";
        flechaDerecha.style.display = indiceActual === recomendaciones.length - 1 ? "none" : "block";
    }

    function mostrarRecomendacion(index) {
        recomendaciones.forEach((reco, i) => {
            reco.classList.remove("active");
            if (i === index) {
                reco.classList.add("active");
            }
        });
        actualizarFlechas();
    }

    function siguienteRecomendacion() {
        if (indiceActual < recomendaciones.length - 1) {
            indiceActual++;
            mostrarRecomendacion(indiceActual);
        }
    }

    function anteriorRecomendacion() {
        if (indiceActual > 0) {
            indiceActual--;
            mostrarRecomendacion(indiceActual);
        }
    }

    // Inicia el carrusel automático
    function iniciarCarrusel() {
        intervalo = setInterval(() => {
            if (indiceActual < recomendaciones.length - 1) {
                siguienteRecomendacion();
            } else {
                indiceActual = 0; // Reiniciar al inicio si llega al final
                mostrarRecomendacion(indiceActual);
            }
        }, 100000);
    }

    // Detiene el carrusel temporalmente y lo reinicia después de 10s
    function detenerTemporalmente() {
        clearInterval(intervalo);
        setTimeout(iniciarCarrusel, 10000);
    }

    flechaIzquierda.addEventListener("click", function () {
        anteriorRecomendacion();
        detenerTemporalmente();
    });

    flechaDerecha.addEventListener("click", function () {
        siguienteRecomendacion();
        detenerTemporalmente();
    });

    // Ocultar la flecha izquierda al inicio
    actualizarFlechas();
    iniciarCarrusel();
});



/*Carrusel normal */
document.addEventListener("DOMContentLoaded", function () {
    const carruseles = document.querySelectorAll(".carrusel-cards, .carrusel-viendo, .carrusel-top");

    carruseles.forEach(carrusel => {
        const flechaIzquierda = carrusel.parentElement.querySelector(".flecha.izquierda");
        const flechaDerecha = carrusel.parentElement.querySelector(".flecha.derecha");

        function actualizarFlechas() {
            flechaIzquierda.style.display = carrusel.scrollLeft === 0 ? "none" : "block";

            const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
            flechaDerecha.style.display = carrusel.scrollLeft >= maxScrollLeft ? "none" : "block";
        }

        if (flechaIzquierda && flechaDerecha) {
            actualizarFlechas();

            flechaIzquierda.addEventListener("click", () => {
                carrusel.scrollBy({ left: -1400, behavior: "smooth" });
            });

            flechaDerecha.addEventListener("click", () => {
                carrusel.scrollBy({ left: 1400, behavior: "smooth" });
            });
            carrusel.addEventListener("scroll", actualizarFlechas);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const carruselViendo = document.querySelector(".carrusel-viendo"); 
    const flechaIzquierda = carruselViendo.querySelector(".flecha.izquierda");
    const flechaDerecha = carruselViendo.querySelector(".flecha.derecha");
    function actualizarFlechas() {
        flechaIzquierda.style.display = carruselViendo.scrollLeft === 0 ? "none" : "block";
        const maxScrollLeft = carruselViendo.scrollWidth - carruselViendo.clientWidth;
        flechaDerecha.style.display = carruselViendo.scrollLeft >= maxScrollLeft ? "none" : "block";
    }
    if (flechaIzquierda && flechaDerecha) {
        actualizarFlechas();
        flechaIzquierda.addEventListener("click", () => {
            carruselViendo.scrollBy({ left: -1400, behavior: "smooth" });
        });
        flechaDerecha.addEventListener("click", () => {
            carruselViendo.scrollBy({ left: 1400, behavior: "smooth" });
        });
        carruselViendo.addEventListener("scroll", actualizarFlechas);
    }
});



