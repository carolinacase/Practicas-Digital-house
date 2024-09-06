const prompt = require("prompt-sync")({sigint: true});

//Funcion para agregar una nueva tarea al array
let Tareas = [];

function agregarTarea (nombreRecibido,FechaLimiteRecibida = null){
    Tareas.push({ nombre: nombreRecibido, completada: false, FechaLimite: FechaLimiteRecibida });
    console.log("Tarea agregada con éxito!");
}

//Eliminar una tarea

function eliminarTarea (indice){

    if(indice >= 0 && indice < Tareas.length) {
        Tareas.splice(indice, 1);
        console.log("Tarea Eliminada correctamente.");
    } else{
        console.log("Indice de tarea invalido");
    }
}

//Funcion para marcar tarea como completada 

function completarTarea (indice){
    if(indice >=0 && indice < Tareas.length){
        Tareas[indice].completada = true;
        console.log("Tarea marcada como correcta");
    } else{
        console.log("Indice de tareas invalido");
    }
}

//Marcar una tarea especifica 
function modificarTarea(indice,nuevoNombre,nuevaFechaLimite = null){
    if(indice >= 0 && indice < Tareas.length){
        Tareas[indice].nombre = nuevoNombre;

    }if(nuevaFechaLimite !== null){
        Tareas[indice].FechaLimite = nuevaFechaLimite;
    console.log("Tarea modificada con exito!");

    }else{
        console.log("Indice de tarea Invalido");
    }

}

//Menu de opciones 
function MostrarMenu(){
    console.log("_Menu_");
    console.log("1_Agregar Tarea");
    console.log("2_Eliminar Tarea");
    console.log("3_Marcar una tarea");
    console.log("4_Modificar una tarea");
    console.log("5_Mostrar todas las tareas");
    console.log("0_Salir");
}
//Interacion con el usuario 

function interactuarConUsuario(){
    let opcion = -1;

    while (opcion!=0){
        MostrarMenu();
        opcion = parseInt(prompt("Ingrese la opcion seleccionada: "));

        switch (opcion) {
            case 1:
                let nombreTareaNueva = prompt("Ingrese el nombre de la tarea a cargar: ")
                agregarTarea(nombreTareaNueva);
                break;

            case 2:
                let IndiceAEliminar = prompt("Ingrese el nombre de la tarea a Eliminar: ")
                eliminarTarea(IndiceAEliminar);
                break;

            case 3:
                let IndiceACompletar = prompt("Ingrese el nombre de la tarea a Completar: ")
                completarTarea(IndiceACompletar);
                break;
            case 4:
                let IndiceAModificar = prompt("Ingrese el nombre de la tarea a Modificar: ")
                modificarTarea(IndiceAModificar);
                break;

            case 5:
                console.log("__Lista de Tareas__");
                console.log(Tareas);
                break;
             
            default:
                console.log("Opcion Invalida");
                break;
            
        }
    }
}

interactuarConUsuario();