const prompt = require("prompt-sync")({ sigint: true });



function Suma (num1,num2){
    let resultado = num1 + num2;
    return resultado;
}

function Resta (num1,num2){
    let resultado = num1 - num2;
    return resultado;
}

function multiplicacion (num1,num2){
    let resultado = num1 * num2;
    return resultado
}

function division (num1,num2){
    if (num2 === 0){
        return ("No se puede divir por 0");
    }else{
        return num1/num2;
    }
}

console.log("Bienvenido a su calculadora digital");
console.log("Indique que operacion desea realizar");
console.log("1. Suma");
console.log("2. Resta");
console.log("3. Multiplicación");
console.log("4. división");

let opcion = parseInt(prompt("indique que operacion desea realizar:"))
let numero1;
let numero2;
let resultado;

switch (opcion) {
    case 1:
        numero1 = parseInt(prompt("Indique el primer numero a sumar: "));
        numero2 = parseInt(prompt("Indique el segundo numero a sumar: "));
        resultado = Suma (numero1,numero2);
        console.log ("El resultado de la suma es:"+ resultado);
        break;
    case 2:
        numero1 = parseInt(prompt("Indique el primer numero a restar: "));
        numero2 = parseInt(prompt("Indique el segundo numero a restar: "));
        resultado = Resta (numero1,numero2);
        console.log ("El resultado de la resta es:"+ resultado);
        break;

    case 3:
        numero1 = parseInt(prompt("Indique el primer numero a multiplicar: "));
        numero2 = parseInt(prompt("Indique el segundo numero a multiplicar: "));
        resultado = multiplicacion (numero1,numero2);
        console.log ("El resultado de la multiplicación es:"+ resultado);
        break;

    case 4:
        numero1 = parseInt(prompt("Indique el primer numero a dividir: "));
        numero2 = parseInt(prompt("Indique el segundo numero a dividir: "));
        resultado = division (numero1,numero2);
        if(typeof resultado == "string"){
            console.log(resultado);

        }else{
            console.log ("El resultado de la división es:"+ resultado);

        }
        break;

    default:
        console.log ("Ingreso una opcion no valida.");
        break;
}
