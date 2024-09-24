let array = [{
    nombre :"Zoe",
    edad : 27
},
{
    nombre :"Karina",
    edad : 32 
},
{
    nombre : "Daniela",
    edad : 50
}
];

//FUNCION PARA ORDENAR DE MENOR A MAYOR LOS ELEMENTOS DE NUESTRO ARRAY

for(let j = 0 ; j < array.length ; j++){ // Su funcion es repetir todo el algoritmo tantas veces como elementos tengamos

    for (let i = 0 ; i < array.length -1 ; i++){// Su funcion es recorrer la totalidad del array

        if(array[i].nombre > array[ i + 1].nombre){ //IF para comparar elementos

            let temp = array[i];
            array[i] = array[i + 1];
            array[i + 1] = temp;
        }
    } 
}

console.log(array);