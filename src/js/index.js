
/*Constate para el div donde se imprimen los datos */
const divDatos = document.querySelector("#imprimir_datos");

/*Funcion mostrar datos */
const mostrar_datos = () =>{
    const inputNombre = document.getElementById("nombre").value;
    const inputDireccion = document.querySelector("#direccion").value;
    const inputEmail = document.querySelector("#email").value;

    divDatos.innerHTML `
    <h2>Datos del cliente</h2>
    <p>Nombre: ${inputNombre} </p>
    <p>Dirección: ${inputDireccion} </p>
    <p>Email: ${inputEmail} </p>`;
}

window.mostrar_datos = mostrar_datos;