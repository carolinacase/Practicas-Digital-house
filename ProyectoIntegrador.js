//Array para almacenar las tareas
let Tareas = [];

function agregarTarea (nombreRecibido,FechaLimite = null){
    Tareas.push({ nombre : nombreRecibido , completada : false , FechaLimite : FechaLimiteRecibida});
}

//Eliminar una tarea

function eliminarTarea (indice){
    if(indice >=0 && indice < Tareas.length){
        Tareas.splice(indice,1);
        console.log("Tarea Eliminada correctamente");
    }else{
        console.log("Indice de tarea invalido");
    }
}

//Funcion para marcar tarea como completada 