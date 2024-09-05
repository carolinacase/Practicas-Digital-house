let Gastos = [
    [10,20,30,40,50,60,70], //Semana 1
    [5,15,25,35,45,55,65], //Semana 2
    [8,18,28,38,48,58,68], //Semana 3
    [12,22,32,42,52,62,72] //Semana 4
];


//Gastos de una semana 
function gastosDeUnaSemanaEspecifica (matriz, numSemana){
    
    let SumaDeGastos = 0;
    
    for (let i = 0 ; i < matriz [numSemana].length; i++){
        SumaDeGastos += matriz [numSemana-1][i];
    }
    return SumaDeGastos;
}


let sumaDeGastosSemanales = gastosDeUnaSemanaEspecifica (Gastos,2);
//console.log ("Los gastos de la semana 2 fueron :" + sumaDeGastosSemanales)

//Gastos de un dia especifico

function GastosDeUnDiaDeLaSemana (matriz,numDeDia){
    let gastosDeUnDia = 0;

    for(let i = 0; i < matriz.length ; i++){
        gastosDeUnDia += matriz[i][numDeDia-1];
    }
    return gastosDeUnDia;
}
let gastosTotales = GastosDeUnDiaDeLaSemana(Gastos,1);
//console.log("Los Gastos de todos los lunes fueron: " + gastosTotales);

//Gastos totales del mes 
function GastosDeTodoElMes (matriz){

    let gastosMensual = 0;

    for(let i = 0 ; i < matriz.length ; i++){
        for(let j = 0 ; j < matriz[i].length ; j++){
            gastosMensual += matriz [i][j];
        }
    }

    return gastosMensual;

}

let gastosMensuales = GastosDeTodoElMes(Gastos);
//console.log ("Los gastos de todo el mes fueron: " + gastosMensuales);

//Callbacks - Gastos por Semana

function CalcularTotalGastosPorSemana(matriz,Callback){
    let TotalGastosPorSemana = [];
    let gastosSemanales = 0;
    
    matriz.forEach(function(semana){
        gastosSemanales = semana.reduce(function(total,dia){
            return total + dia;
        });
        TotalGastosPorSemana.push(gastosSemanales);
    });

    Callback(TotalGastosPorSemana);
   
}
//Otra funcion
function mostrarResultados(resultados){
    console.log("Total de gastos por Semana: "+ resultados);
}

CalcularTotalGastosPorSemana(Gastos,mostrarResultados);
