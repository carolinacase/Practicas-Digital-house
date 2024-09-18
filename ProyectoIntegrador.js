const prompt = require("prompt-sync")({sigint: true});


let Tareas = [];
let categoriasNombres = [
    "trabajo",
    "Personal",
    //Agregar mas categorias segun sea necesario
];

//Funcion que muestra todas las categorias
function mostrarTodasLasCategorias (){
    console.log("Categorias Existentes: ");
    categoriasNombres.forEach(function(categoria, indice){
        console.log(indice + ":" + categoria)
    });
}

//funcion que sirve para cargar nuevas categorias por el usuario
function agregarNuevaCategoriaPorElUsuario(nombreCategoria){
    categoriasNombres.push(nombreCategoria);
    console.log("categoria" + nombreCategoria + "agregada Correctamente!");

}
//Funcion para agregar una nueva tarea al array
function agregarTarea (nombreRecibido,FechaLimiteRecibida = null){

    mostrarTodasLasCategorias();

    let numeroCategoria = parseInt(prompt("Ingrese el numero de la categoria para la nueva tarea: "));

    if(numeroCategoria <= 0 && numeroCategoria < numeroCategoria.length){
        Tareas.push({ nombre: nombreRecibido, completada : false, FechaLimite : FechaLimiteRecibida, categoria : numeroCategoria});
        console.log("Tarea agregada con éxito!");


    }else{
        console.log("Numero de categoria Incorrecto");
    }
    
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
//Funcion que filtra tareas por categoria 
function filtrarTareasPorCategoria(numeroCategoria){
   let tareasFiltradas = Tareas.filter(function(tarea){
    return tarea.categoria === numeroCategoria;

   });
   return tareasFiltradas;

}

//funcion que muestra cantidad de tareas completadas
function contarTareasCompletadasPorCategoria(numeroCategoria){
    let tareasCategoria = filtrarTareasPorCategoria(numeroCategoria);
    let tareasCompletadas = tareasCategoria.reduce(function(contador, tarea){
        return tarea.completada ? contador + 1 : contador;
    },0);

    let tareasEnTotal = tareasCategoria.length;

    console.log("Tareas Completadas de la categoria " + numeroCategoria + ": " + tareasCompletadas + "de " + tareasEnTotal + "Tareas!");

}

//Funcion que muestra todas las tareas no completadas
function mostrarTareasNoCompletadas(){
    console.log ("Tareas no completadas: ");
    Tareas.forEach(function(tarea){
        if(!tarea.completada){
            console.log(" - Nombre: "+ tarea.nombre +", Categoria"+ categoriasNombres[tarea.categoria]);
        };

    });

};


//Funcion para mostrar el menu de opciones 
function MostrarMenu(){
    console.log("-- Menu --");
    console.log("1. Agregar Tarea");
    console.log("2. Eliminar Tarea");
    console.log("3. Marcar una tarea");
    console.log("4. Modificar una tarea");
    console.log("5. Mostrar todas las tareas");
    console.log("6. Ver todas las categorias");
    console.log("7. Agregar una nueva categoria");
    console.log("8. Filtrar Tareas por categoria");
    console.log("9. Visualizar Cantidad de tareas completadas por categoria");
    console.log("10. Visualizar todas las tareas no completadas");
    console.log("0. Salir");
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

            case 6:
                mostrarTodasLasCategorias();
                break;

            case 7:
                let nuevaCategoria = prompt("Ingrese el nombre de la nueva categoria a agregar:");
                agregarNuevaCategoriaPorElUsuario(nuevaCategoria);
                break;

            case 8:
                mostrarTodasLasCategorias();
                let nroCategoria = parseInt(prompt("Ingrese el numero de la categoria a filtrar"));
                let tareasCategoria = filtrarTareasPorCategoria(nroCategoria);

                console.log("tareas de la categoria seleccionada: " );
                console.log(tareasCategoria);
                break;
            
            case 9:
                mostrarTodasLasCategorias();
                let nroCateg = parseInt(prompt("Ingrese el numero de la categoria a visualizar: "));
                contarTareasCompletadasPorCategoria(nroCateg);
                break;
            
            case 10:
                mostrarTareasNoCompletadas();
                break;

            

             
            default:
                console.log("Opcion Invalida");
                break;
            
        }
    }
}

interactuarConUsuario();