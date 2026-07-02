/**
 * validators.js
 * Funciones puras de validación reutilizadas por el formulario de adopción.
 * Cada función recibe un valor (string/number) y devuelve:
 *   - null  -> el valor es válido
 *   - texto -> mensaje de error a mostrar al usuario
 *
 */

const REGEX = {
    // Solo letras (con tildes/ñ) y espacios, entre 3 y 50 caracteres
    nombre: /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(\s[A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/,
    // Formato de correo básico: usuario@dominio.tld
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    // Celular de peru: empieza en 9 y tiene 9 dígitos en total
    telefono: /^9\d{8}$/,
};

function validarNombre(valor) {
    const limpio = (valor || "").trim();
    if (limpio === "") return "El nombre completo es obligatorio.";
    if (limpio.length < 3) return "El nombre debe tener al menos 3 caracteres.";
    if (!REGEX.nombre.test(limpio)) return "El nombre solo puede contener letras y espacios.";
    return null;
}

function validarEmail(valor) {
    const limpio = (valor || "").trim();
    if (limpio === "") return "El correo electrónico es obligatorio.";
    if (!REGEX.email.test(limpio)) return "Ingresa un correo electrónico válido (ej: nombre@dominio.com).";
    return null;
}

function validarTelefono(valor) {
    const limpio = (valor || "").trim();
    if (limpio === "") return "El teléfono es obligatorio.";
    if (!REGEX.telefono.test(limpio)) return "Ingresa un celular válido de 9 dígitos (ej: 987654321).";
    return null;
}

function validarDireccion(valor) {
    const limpio = (valor || "").trim();
    if (limpio === "") return "La dirección es obligatoria.";
    if (limpio.length < 5) return "Ingresa una dirección más detallada.";
    return null;
}

function validarSeleccion(valor, campo) {
    if (!valor || valor === "") return `Selecciona ${campo}.`;
    return null;
}

function validarNumeroMascotas(valor) {
    if (valor === "" || valor === null || valor === undefined) return "Indica el número de mascotas actuales.";
    const numero = Number(valor);
    if (Number.isNaN(numero) || numero < 0) return "Ingresa un número válido (0 o más).";
    if (!Number.isInteger(numero)) return "Ingresa un número entero.";
    return null;
}

function validarMensaje(valor) {
    const limpio = (valor || "").trim();
    if (limpio === "") return "Cuéntanos brevemente por qué deseas adoptar.";
    if (limpio.length < 15) return "Cuéntanos un poco más (mínimo 15 caracteres).";
    return null;
}

// Se exponen en el objeto global para que los componentes React los consuman
window.Validators = {
    validarNombre,
    validarEmail,
    validarTelefono,
    validarDireccion,
    validarSeleccion,
    validarNumeroMascotas,
    validarMensaje,
};
