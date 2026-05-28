const estudiante = [
    {
        nombre: "Elizabeht",
        notas: [18, 20, 18],
        correo: "elizagael13@gmail.com",
        edad: 19,
        ciudad: "Curacabi - Chile"
    },
    {
        nombre: "Karol",
        notas: [5, 10, 20],
        correo: "vmontalvoka@uss.edu.pe",
        edad: 19,
        ciudad: "Pucalpa"
    },
    {
        nombre: "Hernan",
        notas: [2, 4, 16],
        correo: "rsalazarhernana@uss.edu.pe",
        edad: 19,
        ciudad: "Ullurpampa"
    }
];

//PROMEDIO DE LAS NOTAS DE LOS ESTUDIANTES
const calcularPromedio = (notas) => {
    const suma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    return suma / notas.length;
};

//MOSTRAR EL PROMEDIO DE CADA ESTUDIANTE
console.log("Promedio de los estudiantes:");
for (let est of estudiante) {
    const promedio = calcularPromedio(est.notas);
    console.log("Nombre: " + est.nombre);
    console.log("Notas: " + est.notas);
    console.log("Promedio: " + promedio.toFixed(2));

    if (promedio >= 10.5) {
        console.log("Estado: Aprobado");
    } else {
        console.log("Estado: Reprobado");
    }
}

//FILTRAR LOS ESTUDIANTES APROBADOS
const estudiantesAprobados = estudiante.filter(est => {
const promedio = calcularPromedio(est.notas);
return promedio >= 10.5;
});

estudiantesAprobados.forEach(est => {
    console.log(" ");

    console.log("Estudiante Aprobado:");
    console.log(" ");
    console.log("Nombre: " + est.nombre);
    console.log("Notas: " + est.notas);
    console.log("Promedio: " + calcularPromedio(est.notas).toFixed(2));
    console.log("Estado: Aprobado");
});
