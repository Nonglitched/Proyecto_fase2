document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cotizador-form');
    const resultado = document.getElementById('resultado');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const tipo = document.getElementById('tipo').value;
        const metros = parseFloat(document.getElementById('metros').value);
        const ubicacion = document.getElementById('ubicacion').value;

        if (!metros || !ubicacion) {
            resultado.innerHTML = '<p>Por favor, completa todos los campos.</p>';
            return;
        }

        let precio = calcularPrecio(tipo, metros, ubicacion);

        resultado.innerHTML = `
            <h2>Cotización:</h2>
            <p>Tipo de seguro: ${tipo}</p>
            <p>Metros cuadrados: ${metros}</p>
            <p>Ubicación: ${ubicacion}</p>
            <p>Precio estimado: $${precio.toFixed(2)}</p>
        `;
    });

    function calcularPrecio(tipo, metros, ubicacion) {
        let precioBase = tipo === 'hogar' ? 500 : 1000;
        let precioPorMetro = tipo === 'hogar' ? 5 : 10;
        let factorUbicacion = ubicacion.toLowerCase().includes('ciudad') ? 1.2 : 1;

        return (precioBase + (metros * precioPorMetro)) * factorUbicacion;
    }
});