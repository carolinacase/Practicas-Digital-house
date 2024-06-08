//Ejericio 1 - Validador de contraseña 

/*let contraseña = "micontraseña";

function validarContraseña(contraseñaRecibida){
    
    if (contraseñaRecibida === contraseña){
       console.log("Contraseña Valida");
    }else{
      console.log("contraseña no valida");
    }

}

validarContraseña("micontraseña");*/

//Ejercicio numero 2 - Calculadora de IMC

/*function CalcularIMC(peso, altura){

    let imc = peso / (altura*altura);
    if(imc < 18.5){
        console.log("Bajo Peso");
    } else if(imc < 24.9){
        console.log("Peso Normal");
    } else if (imc < 29.9){
        console.log("Sobrepeso");
    } else{
        console.log("Obesidad")
    }

}

CalcularIMC(67, 1.65);*/

// Ejercicio numero 3 - CAMBIO DE MONEDA

//Opcion 

function ConvertirMoneda(cantidad,tipodecambio){
    }
    /*let resultado = cantidad * tipodecambio;
    return resultado;



let cantidad = ConvertirMoneda (100,0.85)
console.log("Cantidad en Euros:"+ cantidad)
*/

//Opcion 2
/*function convertirMoneda2(cantidad,monedaDestino){
    let tipoDeCambio;

    switch (monedaDestino) {
        case "dolar":
            tipoDeCambio = 1.0 // Tipo de cambio dolar a si mismo
            break;
        case "real":
            tipoDeCambio = 5.5;// Tipo de cambio de dolar a real
            break;
        case "euro":
            tipoDeCambio = 0.85; // Tipo de cambio dolar a Euro 
            break;
        default:
            console.log("Moneda no soportada");
            return -1;
            break;
    }
    let resultado = cantidad * tipoDeCambio;
    console.log("cantidad convertida a" + monedaDestino +" : " + resultado);

}

convertirMoneda2(100,"real");*/

//EJERCICIO N°4

/*function evaluarEdad(edad){

   if (edad<12){
    console.log("Niño");
   }else if(edad<18){
    console.log("Menor de edad");
   }else if(edad<30){
    console.log("Adulto joven");
   }else{
    console.log("Adulto");
   }
}

evaluarEdad(25);*/

//EJERCICIO N°5 - Saludo

/*function GenerarMensajePersonalizado(nombre,momentoDelDia){
    let saludo = (momentoDelDia === "mañana") ? "Buenos Dias" : "Buenas Tardes";
    console.log(`${saludo},${nombre}!`);
}

GenerarMensajePersonalizado("Lautaro","mañana");*/











