/*Ejericios de JS*/

/*Constantes globales*/
const nombre = prompt("¿Cúal es tu nombre?");
console.log(`Hola ${nombre}`);
document.dir(document)


const edad = parseInt(prompt("¿Cuántos años tienes?"));


/*Funcion declarada(hoisting)*/
function calcular_edad(nombre, edad){
    if (edad>=18){
    console.log(`${nombre} es mayor de edad`);
    }else{
    console.log(`${nombre} es menor de edad`);
    }
}

calcular_edad(nombre, edad);