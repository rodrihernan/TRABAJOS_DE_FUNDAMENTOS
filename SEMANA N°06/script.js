document.getElementById("btnMensaje").addEventListener("click", function () {
    alert("¡Hola! Bienvenidos a PC Makanakys");
});

// Cambiar título
const titulo = document.querySelector("#inicio h2");
titulo.textContent = "Transformamos ideas en soluciones digitales";

/* EVENTO mouseover */

const tarjetas = document.querySelectorAll("article");

tarjetas.forEach(function (article) {

    article.addEventListener("mouseover", function () {
        article.style.border = "3px solid #165163";
    });

    article.addEventListener("mouseout", function () {
        article.style.border = "none";
    });

});

/* VALIDACIÓN DEL FORMULARIO */

function validarFormulario(callback) {

    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let mensaje = document.getElementById("mensaje").value;

    let error = [];

    if (nombre.trim() === "") {
        error.push("Por favor, complete el campo de nombre.");
    }
    if (!email.includes("@")) {
        error.push("Correo electrónico inválido.");
    }
    if (telefono.length !==9 || isNaN(telefono)) {
        error.push("Teléfono inválido.");
    }
    if (mensaje.length < 10) {
        error.push("El mensaje debe tener al menos 10 caracteres.");
    }
    if (error.length > 0) {

        document.getElementById("error").innerHTML = error.join("<br>");

    } else {

        document.getElementById("error").innerHTML = "";

        callback();
    } 
}

/* EVENTO SUBMIT */

document.getElementById("form").addEventListener("submit", function (event) {

    event.preventDefault();

    validarFormulario(function () {
        alert("Formulario enviado correctamente");
    });

});
