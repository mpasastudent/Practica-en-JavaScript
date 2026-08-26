/*Pagina para descuentos*/
let precio = parseFloat(prompt("Ingrese el precio del producto: "));
let descuento = parseFloat(prompt("Ingrese el descuento apropiado: "));

/*Funcion flecha - Arrow function*/
const calcular_total = (precio, descuento) =>{
    /*variable let */
    let precio_final = precio - ((precio*descuento)/100);
    console.log(`${precio_final} es el valor final`);
    alert(`Usted debe cancelar ${precio_final}`)
}

/*Llamar a la funcion */
calcular_total(precio, descuento);
