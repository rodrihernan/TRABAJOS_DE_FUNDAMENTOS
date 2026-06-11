document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Selección de elementis del DOM
    const formAdopcion = document.getElementById('formAdopcion');
    const inputNombre = document.getElementById('nombre');
    const txtDescripcion = document.getElementById('descripcion');
    const inputMascotas = document.getElementById('mascotas');

    if (formAdopcion) {
        formAdopcion.addEventListener('submit', (evento) => {
            // Evita que la página se recargue automáticamente
            evento.preventDefault();

            const nombre = inputNombre.value.trim();
            const descripcion = txtDescripcion.value.trim();
            const mascotas = inputMascotas.value;

            if (nombre === "" || descripcion === "" || mascotas === "") {
                mostrarMensaje("Por favor, rellene todos los campos obligatorios.", "danger");
                return;
            }

            // Simulación de guardado exitoso / Envío Frontend exitoso
            console.log("¡Solicitud Recibida con éxito!", {
                postulante: nombre,
                interes: descripcion,
                mascotasActuales: mascotas,
                fechaSolicitud: new Date().toLocaleDateString()
            });

            mostrarMensaje(`¡Gracias ${nombre}! Tu solicitud para adoptar a "${descripcion}" ha sido enviada con éxito.`, "success");

            formAdopcion.reset();
        });
    }

    /**
     * Función utilitaria para inyectar una alerta dinámica dentro del contenedor del formulario
     * @param {string} mensaje - Texto a mostrar
     * @param {string} tipo - Tipo de alerta Bootstrap ('success', 'danger', etc.)
     */
    function mostrarMensaje(mensaje, tipo) {
        // Remover alerta previa si existiese
        const alertaExistente = document.querySelector('.alert-dinamica');
        if (alertaExistente) {
            alertaExistente.remove();
        }

        const divAlerta = document.createElement('div');
        divAlerta.className = `alert alert-${tipo} alert-dinamica mt-3 shadow-sm alert-dismissible fade show`;
        divAlerta.role = 'alert';
        divAlerta.innerHTML = `
            <strong>${tipo === 'success' ? '🐾 ¡Excelente!' : '⚠️ Error:'}</strong> ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        `;

        formAdopcion.appendChild(divAlerta);


        setTimeout(() => {
            if (divAlerta.parentNode) {
                divAlerta.remove();
            }
        }, 6000);
    }
});