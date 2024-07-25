window.addEventListener('scroll', function() {
    var parrafoInicio = document.querySelector('.parrafo_inicio');
    var posicionDesdeArriba = parrafoInicio.getBoundingClientRect().top;
    var tamañoDePantalla = window.innerHeight / 1.3; // Ajusta este valor según necesites

    if (posicionDesdeArriba < tamañoDePantalla) {
        parrafoInicio.classList.add('animar-scroll');
    }
});

const miFormulario = document.querySelector ("#formulario");

miFormulario.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(event)
} )

