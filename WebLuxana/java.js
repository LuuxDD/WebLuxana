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
    const nombreInput = document.querySelector('#nombreInput');
    const emailInput = document.querySelector('#emailInput');
    const optionsInput = document.querySelector('#optionsInput')

    const mensaje = {
        nombre: nombreInput.value,
        email: emailInput.value,
        opcion: optionsInput.value
    }
    fetch('https://luxana-isp-default-rtdb.firebaseio.com/correo.json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(mensaje)
    }).then((respuesta) => {
        return respuesta.json(); 
    }).then((dataFinal) => {
        console.log('Datos guardados:', dataFinal);
        alert('¡Suscripción exitosa! Gracias por unirte a nosotros.');
        miFormulario.reset();
    });
    
});

