//*SELECCIONAR TODOS LOS ELEMENTOS HTML*//
const inputTarea = document.getElementById("nuevaTarea");
const btnAgregar = document.getElementById("agregarTareaBtn");
const lisTareas = document.querySelector("#tareas");
const parraMens = document.querySelector("#mensaje");

//*FUNCIÓN PARA AGREGAR TAREA*//
const agregarTarea = () =>{
    //*Asignamos el contenido de input a una constante*//
    const textoInput = inputTarea.value.trim();
    //*Validar que el inputTarea tenga texto*//
    if(!textoInput){
        parraMens.textContent="Ingrese una tarea";
        return;
    }
    parraMens.textContent="";

    const lista = document.createElement("li");
    
    //*Se le agrega la clase css tarea al elemento li */
    lista.classList.add("tarea");

    lista.innerHTML= `<span>${textoInput}</span>
                    <button class = "eliminarBtn">Eliminar Tarea</button>`;

    lisTareas.appendChild(lista);

    inputTarea.value=" ";

    //*Añadir o manejar eventos*//
    lista.querySelector("span").addEventListener("click", ()=>{
        lista.classList.toggle("tarea-completada");
    });

    lista.querySelector(".eliminarBtn").addEventListener("click", ()=>{
        lista.remove();
    });

}

//*Manejar el evento click en un boton*//
btnAgregar.addEventListener("click", agregarTarea);