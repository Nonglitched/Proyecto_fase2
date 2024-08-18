const claveApi = 'yWFRUCAp0FVGGMXuGvf4zcxxCicLukFLWoa3AXio';
const urlApi = 'https://api.nasa.gov/planetary/apod';

function obtenerImagenAstronomicaDelDia() {
    const entradaFecha = document.getElementById('fecha-apod');
    const fecha = entradaFecha.value || null;
    
    let url = `${urlApi}?api_key=${claveApi}`;
    
    if (fecha) {
        url += `&date=${fecha}`;
    }

    fetch(url)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error(`¡Error HTTP! estado: ${respuesta.status}`);
            }
            return respuesta.json();
        })
        .then(datos => {
            console.log('Datos APOD:', datos);
            mostrarImagen(datos.url, datos.title, datos.explanation);
        })
        .catch(error => {
            console.error('Hubo un problema con la operación de fetch:', error);
        });
}

function mostrarImagen(url, titulo, explicacion) {
    document.getElementById('titulo-apod').textContent = titulo;
    document.getElementById('imagen-apod').src = url;
    document.getElementById('explicacion-apod').textContent = explicacion;
}

// Cargar la imagen de hoy cuando se carga la página
window.onload = obtenerImagenAstronomicaDelDia;