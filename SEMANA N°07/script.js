// CREAR UNA FUNCIÓN FLECHA QUE RECIBA UN NÚMERO Y RETORNE SU CUADRADO

// FUNCIÓN FLECHA
const cuadrado = numero => numero * numero;

console.log(cuadrado(10)); // 100


// DESARROLLAR UNA FUNCIÓN QUE CALCULE EL PRECIO INCLUYENDO EL IGV

function calcularPrecio(precio, igv = 0.18) {
    return precio + (precio * igv);
}

console.log(calcularPrecio(100)); // 118

//IMPLEMENTAR UN CLOSURE PARA INCREMENTAR UN CONTADOR

function crearContador() {
    let cont = 0;
    return function() {
        cont++;
        return cont;
    };
}

const contador = crearContador();
console.log(contador()); // 1 
console.log(contador()); // 2
console.log(contador()); // 3

//CALLBACKS
//CREAR UNA FUNCION QUE RECIBA 2 NUMEROS Y UN CALLBACK PARA REALIZAR UNA OPERACION

function operar(a, b, callback) {
    return callback(a, b);
}
const suma = (x, y) => x + y;
const resta = (x, y) => x - y;

console.log(operar(5, 3, suma)); // 8
console.log(operar(5, 3, resta)); // 2


// FUNCION RECURSIVA PARA CALCULAR EL FACTORIAL DE UN NÚMERO

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }   else {  
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // 120

// FUNCION ANÓNIMA AUTOEJECUTABLE(IIFE) PARA MOSTRAR UN MENSAJE EN LA CONSOLA

(function() {
    console.log("Bienvenido wawita al curso de fundamentos ya vuelta");
})();

// CLASIFICACION DE EDADES
// nino < 12 || adolecente < 18 || adulto < 60 || adulto mayor >= 60
//ANIDADO
let edad = 10;
    if (edad < 12) {
        console.log("Niño");
    } else if (edad < 18) {
        console.log("Adolescente");
    } else if (edad < 60) {
        console.log("Adulto");
    } else {
        console.log("Adulto Mayor");
    }
//ESTRUCTURAS REPETITIVAS
//TABLA DE MULTIPLICAR CON BUCLE FOR

for (let i = 1; i <= 12; i++) {
    console.log(`7x${i}=${7 * i}`);
}

// SUMA DE LOS 100 PRIMEROS NÚMEROS POSITIVOS CON BUCLE WHILE

let sum = 0;
let cont = 1;

while (cont <= 100) {
    sum += cont;
    cont++;
}

console.log(sum); // 5050

//MOSTRAR LOS 20 PRIMEROS NÚMEROS POSITIVOS, PERO DETENERSE CUANDO SE ENCUENTRE EL NÚMERO 15 CON BUCLE DO WHILE

for (let i = 1; i <= 20; i++) {
    if (i === 15) {
        break;
    }   
    console.log(i);
}  


//MOSTRAR LOS NUMEROS PARES ENTRE 1 Y 20 CON CONTINUE
for (let J = 1; J <= 20; J++) {
    if (J % 2 !== 0) {
        continue;
    }
    console.log(J);
}


//CREAR UNA MENÚ DE OPCIONES CON SWITCH CASE
//[1] Registrar
//[2] Actualizar
//[3] Eliminar
//[4] Salir

let opcion = 2;

switch (opcion) {
    case 1:
        console.log("Registrar");
        break;
    case 2:
        console.log("Actualizar");
        break;
    case 3:
        console.log("Eliminar");
        break;
    case 4:
        console.log("Salir");
        break;
    default:
        console.log("Opción no válida");
}

//CREAR UN ARREGLO CON LOS CUADRADOS DE LOS NUMEROS
const numeritos = [2, 4, 6, 8, 10];
const cuadrados = numeritos.map(num => num * num);
console.log(cuadrados); 

//FILTRAR LOS ESTUDIANTES APROBADOS CON NOTA MAYOR O IGUAL A 12
const notas = [10, 15, 8, 20, 5];
const aprobados = notas.filter(nota => nota >= 12);
console.log(aprobados); 

// CALCULAR SUMA DE LAS VENTAS
//reduce() -> acumular valores
const ventas = [100,120,200,250,50];
const total = ventas.reduce((total, ventas) => total + ventas, 0);
console.log(total); 

//CREAR OBJETO ESTUDIANTE Y MOSTRAR SUS PROPIEDADES
const estudiante= {nombre: "Juan", carrera: "Ingeniería de gallos", ciclo: "5"};
console.log(estudiante.nombre); 
console.log(estudiante.carrera);
console.log(estudiante.ciclo);


//MOSTRAR PROPIEDADES DEL ESTUDIANTE CON FOR.... IN 
const producto={
    nombre: "celular",
    precio: 2500,
    stock: 10,
}
for (let propiedad in producto) {
    console.log(propiedad + ": " +producto[propiedad]);
}

//CONVERTIR UN OBJETO A JSON Y MOSTRARLO EN LA CONSOLA
const persona = {
    nombre: "Karol",  
    correo: "vmontalvoka@uss.edu.pe",
    edad: 2,
    ciudad: "Pucalpa"
};
const personaJSON = JSON.stringify(persona);
console.log(personaJSON);

//CONVERTIR UN JSON A OBJETO Y MOSTRARLO EN LA CONSOLA
const datosJSON = '{"nombre": "Gabi", "correo": "elizagael13@gmail.com", "edad": 19, "ciudad": "Curacabi - Chile"}';
const personaObj = JSON.parse(datosJSON);
console.log(personaObj.nombre);
console.log(personaObj.correo);
console.log(personaObj.edad);
console.log(personaObj.ciudad);