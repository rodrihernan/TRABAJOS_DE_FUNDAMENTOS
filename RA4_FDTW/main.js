// Base de datos de los gatitos para la descripción detallada
const baseDatosGatitos = {
    enrique: {
        nombre: "Enrique",
        edad: "6 meses",
        personalidad: "Juguetón, enérgico y muy mimoso",
        descripcion: "Enrique es un terremoto de amor. Le fascina perseguir juguetes interactivos, trepar rascadores altos y buscar tus piernas para darte pequeños cabezazos de cariño. Se lleva de maravilla con otros animales y es idóneo para hogares activos.",
        cuidados: "Vacunas al día, desparasitado internamente y listo para programar su esterilización. Requiere cepillado semanal.",
        imagen: "enrique.jpg"
    },
    timmy: {
        nombre: "Timmy",
        edad: "6 meses",
        personalidad: "Curioso, intrépido y explorador",
        descripcion: "A Timmy no se le escapa nada; es el detective del refugio. Le encanta investigar cajas de cartón nuevas y mirar por la ventana durante horas. Es muy independiente pero sumamente cariñoso por las noches, cuando buscará dormir a tus pies.",
        cuidados: "Esterilizado, con vacunas completas y desparasitado. Ideal para departamentos o interiores bien protegidos.",
        imagen: "gatito.jpg"
    },
    gengar: {
        nombre: "Gengar",
        edad: "5 meses",
        personalidad: "Tímido, dulce y sumamente tranquilo",
        descripcion: "Gengar necesita un poquito de tiempo para entrar en confianza, pero una vez que te conoce, te regalará los ronroneos más dulces del mundo. Disfruta de ambientes silenciosos y de largas siestas en la cama bajo los rayos del sol.",
        cuidados: "Esterilizado, vacunado y con pruebas negativas a enfermedades felinas. Ideal para un hogar paciente y amoroso sin ruidos fuertes.",
        imagen: "gendar.jpg"
    }
};

// Función para rellenar y mostrar el detalle del gatito seleccionado
function verDetalleGatito(idGatito) {
    const gatito = baseDatosGatitos[idGatito];
    
    if (!gatito) return; // Validación por si acaso

    // Seleccionamos los elementos de la sección descriptiva
    const contenedor = document.getElementById("detalle-gatito");
    const imgElement = document.getElementById("detalle-img");
    const nombreElement = document.getElementById("detalle-nombre");
    const edadElement = document.getElementById("detalle-edad");
    const personalidadElement = document.getElementById("detalle-personalidad");
    const descripcionElement = document.getElementById("detalle-descripcion");
    const cuidadosElement = document.getElementById("detalle-cuidados");
    const btnNombreElement = document.getElementById("btn-nombre-adoptar");

    // Rellenamos los datos dinámicamente
    imgElement.src = gatito.imagen;
    imgElement.alt = "Foto de " + gatito.nombre;
    nombreElement.textContent = gatito.nombre;
    edadElement.textContent = gatito.edad;
    personalidadElement.textContent = gatito.personalidad;
    descripcionElement.textContent = gatito.descripcion;
    cuidadosElement.textContent = gatito.cuidados;
    btnNombreElement.textContent = gatito.nombre;

    // Quitamos 'd-none' para que la sección sea visible
    contenedor.classList.remove("d-none");

    // Desplazamiento automático y suave hacia la descripción
    contenedor.scrollIntoView({ behavior: "smooth", block: "nearest" });
}