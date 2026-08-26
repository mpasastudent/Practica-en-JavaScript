/*Pedimos el nombre del alumno y 3 calificacones */
/*Examen, taller y proyecto */
/*Promedio, si es mayor a 7 aprueba. sino reprueba */

const nombre = prompt("Ingrese su nombre: ");
const examen = parseFloat(prompt("Ingrese la calificación de su examen: "));
const taller = parseFloat(prompt("Ingrese la nota de su taller: "));
const proyecto = parseFloat(prompt("Ingrese la nota de su proyecto: "));

/*Funcion calcular el promedio*/
const calcular_promedio = (nombre, examen, taller, proyecto) =>{
    let promedio = ((examen + taller + proyecto)/3);
    if(promedio >= 7){
        console.log(`El estudiante ${nombre} aprueba con un promedio de ${promedio}`);
    }else{
        console.log(`El estudiante ${nombre} reprueba con un promedio de ${promedio}`);
    }
}

/*Llamamos a la función */
calcular_promedio(nombre, examen, taller, proyecto);

/*EVENTOS*/
