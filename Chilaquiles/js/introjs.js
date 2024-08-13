// consola (log, info, warn, error, assert)

console.log("hola mundo!");
console.info("esto es informaciÃ³n importante");
console.warn("Cuidado!!!");
console.error("Ya te equivocaste...");
console.assert(1 == 1);
console.assert(1 == 0);


// variables, constantes

//let sirve para declarar variables
let nombre = 'Lalo';
console.log("Hola " + nombre);

//%{nombre_variable} sirve para imprimir el valor de una variable con ``
console.log(`${nombre} estÃ¡ programando y le estÃ¡ dando hambre`);

//const sirve para declarar constantes
const precio_chilaquiles = 89;


// Alcance de las variables

{
    let precio_crema = 20;
}

//Arroja un error porque precio_crema fue declarada 
//en otro Ã¡mbito y se muriÃ³ 2 lÃ­neas arriba
//console.log(precio_crema);


// alert, prompt, confirm
alert(`Los chilaquiles cuestan ${precio_chilaquiles}`);
const chilaquiles_favoritos = prompt("Â¿CuÃ¡les son tus chilaquiles favoritos?");
console.log(`Tus chilaquiles favoritos son ${chilaquiles_favoritos}`);

const is_hambre = confirm("Â¿Tienes hambre?");

if(is_hambre) {
    console.info("Pide unos chilaquiles");
} else {
    console.warn("Regresa cuando tengas hambre");
}


// funciones tradicionales
function preparar_chilaquies(tipo) {
    console.log(`Preparando orden de chilaquiles ${tipo}`);
}

//preparar_chilaquies(chilaquiles_favoritos);


// funciones modernas
const crema = () => {
    console.log(" con crema y aguacate.");
}

//crema();

document.getElementById("preparar").onclick = () => {
    preparar_chilaquies(chilaquiles_favoritos);
    crema();
}

// arreglos

const arreglo = ["Elemento"];

const arreglo2 = new Array();

arreglo.push("Otro elemento");

arreglo[10] = "Uno mÃ¡s";


//arreglos asociativos
arreglo["chilaquil"] = "verde";

//recorrido tradicional del arreglo

for (let i = 0; i < arreglo.length; i++) {
    console.log(arreglo[i]);
}

//recorridos alternativos del arreglo

for(let posicion in arreglo) {
    console.log(posicion + ": " + arreglo[posicion]);
}


//Objetos
const objeto = {};

const chilaquil = {
    salsa: "verde",
    extras: "crema, queso y aguacate",
}

console.log(chilaquil);











// modificar html